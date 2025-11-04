import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const router = express.Router();

// 📦 Armazenamento temporário em memória
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 🧩 Criar produto com imagem salva no GridFS
router.post("/", upload.single("imagem"), async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    let imagemId = null;

    if (req.file) {
      const conn = mongoose.connection;
      const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads",
      });

      const uploadStream = bucket.openUploadStream(req.file.originalname, {
        contentType: req.file.mimetype,
      });

      // Envia o buffer da imagem
      uploadStream.end(req.file.buffer);

      // Aguarda o upload terminar
      await new Promise((resolve, reject) => {
        uploadStream.on("finish", () => {
          imagemId = uploadStream.id; // ✅ CORRETO — não use file._id
          resolve();
        });
        uploadStream.on("error", reject);
      });
    }

    // Cria o produto no MongoDB
    const novoProduto = new Product({
      nome,
      descricao,
      imagem: imagemId,
    });

    await novoProduto.save();

    res.status(201).json(novoProduto);
  } catch (error) {
    console.error("❌ Erro ao criar produto:", error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

// 📥 Listar produtos
router.get("/", async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// 🖼 Retornar imagem por ID
router.get("/imagem/:id", async (req, res) => {
  try {
    const conn = mongoose.connection;
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "uploads",
    });

    const fileId = new mongoose.Types.ObjectId(req.params.id);

    const downloadStream = bucket.openDownloadStream(fileId);
    downloadStream.on("error", () => {
      res.status(404).json({ error: "Imagem não encontrada" });
    });

    // Define tipo de conteúdo
    res.set("Content-Type", "image/jpeg");
    downloadStream.pipe(res);
  } catch (error) {
    console.error("❌ Erro ao buscar imagem:", error);
    res.status(500).json({ error: "Erro ao buscar imagem" });
  }
});

export default router;

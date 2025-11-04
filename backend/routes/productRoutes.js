import express from "express";
import multer from "multer";
<<<<<<< HEAD
import mongoose from "mongoose";
=======
import path from "path";
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
import Product from "../models/Product.js";

const router = express.Router();

<<<<<<< HEAD
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
=======
// 📦 Configuração do Multer para salvar imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// 📋 GET - listar todos os produtos
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
router.get("/", async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
<<<<<<< HEAD
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
=======
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar produtos", error: err });
  }
});

// ➕ POST - cadastrar novo produto
router.post("/", upload.single("imagem"), async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    const imagemPath = req.file ? `uploads/${req.file.filename}` : null;

    const novoProduto = new Product({
      nome,
      descricao,
      imagem: imagemPath,
    });

    const salvo = await novoProduto.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(500).json({ message: "Erro ao cadastrar produto", error: err });
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
  }
});

export default router;

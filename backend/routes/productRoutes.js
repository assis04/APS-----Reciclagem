import express from "express";
import multer from "multer";
import path from "path";
import Product from "../models/Product.js";

const router = express.Router();

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
router.get("/", async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
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
  }
});

export default router;

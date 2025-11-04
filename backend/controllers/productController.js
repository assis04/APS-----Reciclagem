import Product from "../models/Product.js";
import fs from "fs";

export const getProducts = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;
    const imagem = req.file ? `/uploads/${req.file.filename}` : null;

    const product = new Product({ nome, descricao, preco, imagem });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    if (req.file) {
      if (product.imagem && fs.existsSync(`.${product.imagem}`)) {
        fs.unlinkSync(`.${product.imagem}`);
      }
      product.imagem = `/uploads/${req.file.filename}`;
    }

    product.nome = nome || product.nome;
    product.descricao = descricao || product.descricao;
    product.preco = preco || product.preco;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Produto não encontrado" });

    if (product.imagem && fs.existsSync(`.${product.imagem}`)) {
      fs.unlinkSync(`.${product.imagem}`);
    }

    await product.deleteOne();
    res.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir produto" });
  }
};

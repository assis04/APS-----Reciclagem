import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String },
    imagem: { type: String }, // caminho da imagem
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

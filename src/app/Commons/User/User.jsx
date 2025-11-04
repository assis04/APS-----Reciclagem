"use client";

import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import DefaultNavBar from "../Component/ComponetNavBar/DefaultNavBar.jsx";
import DefaultButton from "../Component/ComponentButton/DefaultButton.jsx";
import API_BASE_URL from "@/app/config/api";

import { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Stack,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

<<<<<<< HEAD
const API_URL = `${API_BASE_URL}/produtos`; // ✅ backend
=======
<<<<<<< HEAD
const API_URL = `${API_BASE_URL}/produtos`; // ✅ backend
=======
const API_URL = "http://localhost:5000/api/produtos"; // ✅ backend
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    imagem: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);

  // 🔄 Buscar produtos ao carregar a página
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
<<<<<<< HEAD
        const res = await fetch(`${API_BASE_URL}/produtos`);
=======
<<<<<<< HEAD
        const res = await fetch(`${API_BASE_URL}/produtos`);
=======
        const res = await fetch(API_URL);
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946
    fetchProdutos();
  }, []);

  // 🖊 Atualiza os campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  // 📸 Atualiza a imagem selecionada
  const handleImageChange = (e) => {
    setProduto({ ...produto, imagem: e.target.files[0] });
  };

  // 💾 Envia o produto para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nome", produto.nome);
      formData.append("descricao", produto.descricao);
      if (produto.imagem) formData.append("imagem", produto.imagem);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const novoProduto = await res.json();
        setProdutos((prev) => [...prev, novoProduto]);
        setProduto({ nome: "", descricao: "", imagem: null });
        setOpen(false);
        setOpenSnackbar(true);
      } else {
        console.error("Erro ao cadastrar produto");
      }
    } catch (error) {
      console.error("Erro ao enviar produto:", error);
    }
  };

  return (
    <>
      <header>
        <DefaultNavBar showLogin={false} onClick={handleOpen} />
      </header>

      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "100vw",
            height: "calc(100vh - 5rem)",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: 'url("/BackgroundAPS.svg")',
            position: "relative",
          }}
        >
          <DefaultButton content="Novo Item" margin="1rem" onClick={handleOpen} />

          {/* 🧱 Lista de produtos */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
              mt: 4,
              justifyContent: "center",
            }}
          >
            {produtos.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: 250,
                  p: 3,
                  bgcolor: "#73946B",
                  borderRadius: 5,
                  boxShadow: 10,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                {item.imagem && (
                  <img
<<<<<<< HEAD
                    src={`http://localhost:5000/api/produtos/imagem/${item.imagem}`}
=======
<<<<<<< HEAD
                    src={`http://localhost:5000/api/produtos/imagem/${item.imagem}`}
=======
                    src={`http://localhost:5000/${item.imagem}`}
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946
                    alt={item.nome}
                    style={{
                      width: "100%",
                      height: 150,
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  />
                )}

                <Typography variant="h6">{item.nome}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.descricao}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 📦 Modal para cadastrar produto */}
          <Modal open={open} onClose={handleClose}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "#73946B",
                color: "white",
                p: 4,
                borderRadius: 2,
                boxShadow: 24,
                width: 400,
                textAlign: "center",
              }}
            >
              <Stack spacing={2}>
                <TextField
                  name="nome"
                  label="Nome do Produto"
                  value={produto.nome}
                  onChange={handleChange}
                  fullWidth
                  required
                />

                <TextField
                  name="descricao"
                  label="Descrição"
                  value={produto.descricao}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={3}
                />

                <Button variant="contained" component="label">
                  Enviar Imagem
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>

                {produto.imagem && (
                  <Typography variant="body2">
                    Imagem: {produto.imagem.name}
                  </Typography>
                )}

                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Stack>
            </Box>
          </Modal>

          {/* 🔔 Snackbar */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              sx={{ width: "100%" }}
            >
<<<<<<< HEAD
=======
=======
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
>>>>>>> 5c7fc234ddc6c2208f4895a05ba4f5a3c841f506
>>>>>>> dc7dee337d8b72856c04793d158b089d9af89946
              Produto cadastrado com sucesso!
            </Alert>
          </Snackbar>
        </Box>
      </main>
    </>
  );
};

export default UserPage;

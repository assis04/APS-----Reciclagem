"use client";

import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import DefaultNavBar from "../Component/ComponetNavBar/DefaultNavBar.jsx";
import DefaultButton from "../Component/ComponentButton/DefaultButton.jsx";

import { useState } from "react";
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

const UserPage = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduto({ ...produto, imagem: e.target.files[0] });
  };

  const handleAbrirDetalhes = (produto) => {
    setProdutoSelecionado(produto);
    setOpenDetalhes(true);
  };

  const handleFecharDetalhes = () => {
    setOpenDetalhes(false);
    setProdutoSelecionado(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCadastrarProduto(produto);
    setProduto({
      nome: "",
      descricao: "",
      preco: "",
      imagem: null,
    });
    handleClose();
  };

  const handleCadastrarProduto = (produto) => {
    setProdutos((prevProdutos) => {
      const novos = [...prevProdutos, produto];
      localStorage.setItem("produtos", JSON.stringify(novos)); // Salva localmente
      return novos;
    });
    console.log("Produto cadastrado:", produto);
    setOpenSnackbar(true);
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
          <DefaultButton
            content="Novo Item"
            margin="1rem"
            onClick={handleOpen}
          />

          {/* Lista de produtos cadastrados */}
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
                onClick={() => handleAbrirDetalhes(item)}
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
                {/* Mostra a imagem, se houver */}
                {item.imagem && (
                  <img
                    src={URL.createObjectURL(item.imagem)}
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

          <Modal
            sx={{ justifyContent: "center", alignItems: "center" }}
            open={open}
            onClose={handleClose}
          >
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
                {/* Campo: Nome do Produto */}
                <TextField
                  name="nome"
                  label="Nome do Produto"
                  value={produto.nome}
                  onChange={handleChange}
                  fullWidth
                  required
                  sx={{
                    color: "white",
                  }}
                />

                {/* Campo: Descrição */}
                <TextField
                  name="descricao"
                  label="Descrição"
                  value={produto.descricao}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={3}
                />

                {/* Botão para enviar imagem */}
                <Button variant="contained" component="label">
                  Enviar Imagem
                  {/* O input "file" fica escondido dentro do botão */}
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>

                {/* Exibe o nome da imagem selecionada */}
                {produto.imagem && (
                  <Typography variant="body2" color="text.secondary">
                    Imagem selecionada: {produto.imagem.name}
                  </Typography>
                )}

                {/* Botão de envio do formulário */}
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Stack>
            </Box>
          </Modal>
          <Modal
            open={openDetalhes}
            onClose={handleFecharDetalhes}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#DDE2A8",
                borderRadius: 4,
                boxShadow: 24,
                width: "70%",
                maxWidth: 900,
                height: 500,
                p: 4,
                gap: 4,
              }}
            >
              {/* ESQUERDA: Imagem */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: "#73946B",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {produtoSelecionado?.imagem ? (
                  <img
                    src={URL.createObjectURL(produtoSelecionado.imagem)}
                    alt={produtoSelecionado.nome}
                    style={{
                      width: "90%",
                      height: "90%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                ) : (
                  <Typography color="white">Sem imagem disponível</Typography>
                )}
              </Box>

              {/* DIREITA: Detalhes */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: "#A8DDA0",
                  borderRadius: 5,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                }}
              >
                <Typography variant="h4" fontWeight="bold" mb={2}>
                  {produtoSelecionado?.nome}
                </Typography>
                <Typography variant="body1" mb={3}>
                  {produtoSelecionado?.descricao || "Sem descrição"}
                </Typography>
                <DefaultButton content={"Tenho interesse"}/>
              </Box>
            </Box>
          </Modal>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // posição
          >
            {/* Alerta visual dentro da snackbar */}
            <Alert
              onClose={handleCloseSnackbar}
              severity="success" 
              sx={{ width: "100%" }}
            >
              Produto cadastrado com sucesso!
            </Alert>
          </Snackbar>
        </Box>
      </main>
    </>
  );
};

export default UserPage;

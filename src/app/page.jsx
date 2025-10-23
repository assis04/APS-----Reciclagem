"use client";

import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import DefaultNavBar from "./Commons/Component/ComponetNavBar/DefaultNavBar";
import DefaultaButton from "./Commons/Component/ComponentButton/DefaultButton";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { Box, TextField, Typography, Grid, Link, Stack } from "@mui/material";
import Loading from "./Commons/Component/Loading/loading";

const HomePage = () => {
    const router = useRouter();

    const [senha, setSenha] = useState("");
    const [email, setUsuario] = useState("");
    const [loading, setLoading] = useState(false);

    const goToHome = () => {
        setTimeout(() => {
            router.push("/PagesRouter/Home");
            setLoading(true);
        }, 1000);
    };
    const handleLogin = async () => {
        setLoading(true);

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        try {
            const response = await fetch(`${apiUrl}/api/usuarios/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, senha: senha }),
            });

            if (response.ok) {
                toast.success("Usuário logado com sucesso!");

                setTimeout(() => {
                    router.push("/PagesRouter/Home");
                }, 1000);
            } else {
                const errorMsg = await response.text();
                toast.error(errorMsg);
                setLoading(false);
            }
        } catch (error) {
            toast.error("Erro ao conectar com o servidor");
            setLoading(false);
        }
    };

    const goToRegister = () => {
        setLoading(true);

        setTimeout(() => {
            router.push("/PagesRouter/Register");
            setLoading(true);
        }, 1000);
    };

    const goToRecoveryPassword = () => {
        setLoading(true);

        setTimeout(() => {
            router.push("/PagesRouter/Password-recovery");
        }, 1000);
    };

    return (
        <>
            <header>
                <DefaultNavBar />
            </header>
            <main>
                <Box
                    sx={{
                        display: "flex",
                        minWidth: "100vw",
                        height: "calc(100vh - 5rem)",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: 'url("/BackgroundAPS.svg")',
                        position: "relative", // necessário para overlay funcionar
                    }}
                >
                    <Grid
                        container
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={"60vw"}
                        gap={2}
                    >
                        <Grid item size={5}>
                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        height: "49.6vh",
                                        width: "25vw",
                                        border: '3px  solid rgb(255,255,255,0.2)',
                                        padding: "3rem",
                                        borderRadius: 5,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                                    eius aliquid saepe est nihil! Illum perferendis quaerat unde,
                                    delectus alias quia, optio dolorum corporis ipsa neque
                                    aspernatur, est repellat enim?
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item size={5}>
                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        height: "16rem",
                                        width: "30rem",
                                        borderRadius: "2rem",
                                        padding: "3rem",
                                        border: '3px  solid rgb(255,255,255,0.2)',

                                    }}
                                >
                                    Texto 2
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        height: "15rem",
                                        width: "30rem",
                                        borderRadius: "2rem",
                                        padding: "3rem",
                                        border: '3px  solid rgb(255,255,255,0.2)',

                                    }}
                                >
                                    Texto 3
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <ToastContainer />
            </main>
            <footer></footer>
        </>
    );
};

export default HomePage;

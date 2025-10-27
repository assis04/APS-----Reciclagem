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
    const goToLogin = () => {
        setTimeout(() => {
            router.push("/PagesRouter/Login");
            setLoading(true);
        }, 1000);
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
                <DefaultNavBar onClick={goToHome} />
            </header>
            <main>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
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
                        textAlign={'center'}
                        justifyItems={"i"}
                        width={"60vw"}
                        gap={4}
                    >
                        <Grid item size={4}>
                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        width: "25rem",
                                        height: "26rem",
                                        border: '3px  solid rgb(255,255,255,0.2)',
                                        padding: "3rem",
                                        borderRadius: "3rem",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                                    eius aliquid saepe est nihil! Illum perferendis quaerat unde,
                                    delectus alias quia, optio dolorum corporis ipsa neque
                                    aspernatur, est repellat enim?
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item size={4}>
                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        width: "25rem",
                                        height: "12.5rem",
                                        borderRadius: "3rem",
                                        padding: "3rem",
                                        border: '3px  solid rgb(255,255,255,0.2)',

                                    }}
                                >
                                    Texto 2
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: "#73946B",
                                        width: "25rem",
                                        height: "12.5rem",
                                        borderRadius: "3rem",
                                        padding: "3rem",
                                        border: '3px  solid rgb(255,255,255,0.2)',

                                    }}
                                >
                                    Texto 3
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <DefaultaButton
                            height={45}
                            margin={4}
                            onClick={goToLogin}
                            content={'Começar'}
                            widthButton="300px"
                        />
                    </Box>
                </Box>
                <ToastContainer />

            </main>
            <footer></footer>
        </>
    );
};

export default HomePage;

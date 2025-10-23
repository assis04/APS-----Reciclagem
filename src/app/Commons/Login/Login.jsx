'use client'

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import DefaultaButton from '../Component/ComponentButton/DefaultButton.jsx'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import { Box, TextField, Typography, Grid, Link, Stack } from '@mui/material'
import Loading from '../Component/Loading/loading'
import DefaultNavBar from '../Component/ComponetNavBar/DefaultNavBar.jsx'

const LoginPage = () => {
    const router = useRouter()

    const [senha, setSenha] = useState('')
    const [email, setUsuario] = useState('')
    const [loading, setLoading] = useState(false)

    const goToHome = () => {
        setTimeout(() => {
            router.push('/PagesRouter/Home')
            setLoading(true)
        }, 1000);
    }

    const handleLogin = () => {

        if (email != 'thiago') {
            toast.warning('Dados incorretos!')
            return
        }
        if (senha != 'admin') {
            toast.warning('Dados incorretos!')
            return
        }
        if (email && senha === '') {
            toast.warning('Dados incorretos!')
            return
        }
        toast.success('Login feito com sucesso!')
        setTimeout(() => {
            router.push('/PagesRouter/Home')
            setLoading(true)
        }, 1000);
    }

    // const handleLogin = async () => {
    //     setLoading(true)

    //     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    //     try {
    //         const response = await fetch(`${apiUrl}/api/usuarios/login`, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ email: email, senha: senha }),
    //         });

    //         if (response.ok) {
    //             toast.success('Usuário logado com sucesso!')

    //             setTimeout(() => {
    //                 router.push('/PagesRouter/Home')
    //             }, 1000)
    //         } else {
    //             const errorMsg = await response.text()
    //             toast.error(errorMsg)
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         toast.error('Erro ao conectar com o servidor')
    //         setLoading(false)
    //     }
    // }

    const goToRegister = () => {
        setLoading(true)

        setTimeout(() => {
            router.push('/PagesRouter/Register')
            setLoading(true)
        }, 1000);
    }

    const goToRecoveryPassword = () => {
        setLoading(true)

        setTimeout(() => {
            router.push('/PagesRouter/Password-recovery')
        }, 1000);
    }

    return (

        <>
            <header>
                <DefaultNavBar />
            </header>
            <main>
                <Box
                    sx={{
                        display: 'flex',
                        minWidth: '100vw',
                        height: 'calc(100vh - 5rem)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url("/BackgroundAPS.svg")',
                        position: 'relative', // necessário para overlay funcionar
                    }}
                >
                    <Grid container spacing={10} alignItems="center" justifyContent="center" sx={{ px: 2 }}>
                        {/* Imagem */}
                        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box
                                component="img"
                                alt="Imagem Médica"
                                src="/TracaReutilizavel.png"
                                sx={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '400px',
                                    margin: '0  auto',
                                }}
                            />
                        </Grid>
                        {/* Card de Login */}
                        <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
                            <Box
                                sx={{
                                    p: 4,
                                    boxShadow: 10,
                                    borderRadius: 3,
                                    background: '#537D5D',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    margin: '0 auto',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    textAlign="center"
                                    fontWeight="bold"
                                    color="white"
                                    mb={2}
                                >
                                    Entrar
                                </Typography>
                                <Stack width="100%">
                                    <Stack color="rgba(255, 255, 255, 1)" sx={{ opacity: 0.48 }}>
                                        Insira seu e-mail
                                    </Stack>
                                    <TextField
                                        fullWidth
                                        value={email}
                                        placeholder="Insira seu E-mail"
                                        onChange={(e) => setUsuario(e.target.value)}
                                        sx={{
                                            mb: '20px',
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: 'transparent',
                                                color: "#fff",
                                                "& fieldset": { borderColor: "#fff" },
                                                "&:hover fieldset": { borderColor: "#fff", opacity: 0.48 },
                                                "&.Mui-focused fieldset": { borderColor: "#fff" },
                                            },
                                            input: { color: "#fff" },
                                        }}
                                    />
                                    <Stack color="rgba(255, 255, 255, 1)" sx={{ opacity: 0.48 }}>
                                        Insira sua senha
                                    </Stack>
                                    <TextField
                                        fullWidth
                                        value={senha}
                                        type="password"
                                        placeholder="Insira sua Senha"
                                        onChange={(e) => setSenha(e.target.value)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter') {
                                                handleLogin()
                                            }
                                        }}
                                        sx={{
                                            mb: '20px',
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: 'transparent',
                                                color: "#fff",
                                                "& fieldset": { borderColor: "#fff" },
                                                "&:hover fieldset": { borderColor: "#fff", opacity: 0.48 },
                                                "&.Mui-focused fieldset": { borderColor: "#fff" },
                                            },
                                            input: { color: "#fff" },
                                        }}
                                    />
                                    <Box display="flex" justifyContent="center" mt={2}>
                                        <DefaultaButton
                                            height={45}
                                            onClick={handleLogin}
                                            content={'Avançar'}
                                            widthButton="300px"
                                        />
                                    </Box>
                                    <Stack direction="row" justifyContent="center" pt={4}>
                                        <Typography color="white">É novo por aqui?</Typography>
                                        <Typography>
                                            <Link
                                                underline="none"
                                                component="button"
                                                onClick={goToRegister}
                                                sx={{ color: '#7ed957', fontWeight: 'bold', pl: 1 }}
                                            >
                                                Registre-se
                                            </Link>
                                        </Typography>
                                    </Stack>
                                    <Stack justifyContent="center" alignItems={'center'} pt={2}>
                                        <Typography>
                                            <Link
                                                underline="none"
                                                component="button"
                                                onClick={goToRecoveryPassword}
                                                sx={{ color: '#7ed957', fontWeight: 'bold' }}
                                            >
                                                Esqueceu sua senha?
                                            </Link>
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* ✅ Overlay de loading */}
                    {loading && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 9999,
                            }}
                        >
                            <Loading />
                        </Box>
                    )}
                </Box>
                <ToastContainer />
            </main>
            <footer>
            </footer>
        </>
    )
}

export default LoginPage

'use client'

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import DefaultNavBar from '../Component/ComponetNavBar/DefaultNavBar.jsx'
import DefaultButton from '../Component/ComponentButton/DefaultButton.jsx'

import { useState } from 'react'
import { Box, Modal } from '@mui/material'

const UserPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <header>
                <DefaultNavBar showLogin={false} showButton={true} />
            </header>
            <main>
                <Box
                    sx={{
                        display: 'flex',
                        minWidth: '100vw',
                        height: 'calc(100vh - 5rem)',
                        justifyContent: 'center',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url("/BackgroundAPS.svg")',
                        position: 'relative',
                    }}
                >
                    <DefaultButton content="Novo Item" margin="1rem" onClick={handleOpen} />

                    <Modal sx={{ justifyContent: 'center', alignItems: 'center' }} open={open} onClose={handleClose}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'black',
                                color: 'white',
                                p: 4,
                                borderRadius: 2,
                                boxShadow: 24,
                                width: 400, 
                                textAlign: 'center',
                            }}
                        >
                            Conteúdo dentro do modal
                        </Box>
                    </Modal>
                </Box>
                
            </main>
        </>
    )
}

export default UserPage

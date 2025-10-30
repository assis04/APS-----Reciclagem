'use client'

import '@/app/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import DefaultaButton from '../Component/ComponentButton/DefaultButton.jsx'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import { Box} from '@mui/material'
import DefaultNavBar from '../Component/ComponetNavBar/DefaultNavBar.jsx'

const popUpNewPost = () => {
    
}
const UserPage = () => {

    return (

        <>
            <header>
                <DefaultNavBar  showLogin={false} showButton={true}/>
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
                        position: 'relative', // necessário para overlay funcionar
                    }}
                >
                    <DefaultaButton content={"Novo Item"} margin={"1rem"} onClick={}/>
                    
                </Box>
                <ToastContainer />
            </main>
            <footer>
            </footer>
        </>
    )
}

export default UserPage

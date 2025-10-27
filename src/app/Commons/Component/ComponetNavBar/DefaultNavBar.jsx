'use client'

import './DefaultNavBar.css'
import { useRouter } from 'next/navigation'

const DefaultNavBar = () => {
    const router = useRouter()

    const handleLogoClick = (e) => {
        e.preventDefault() // impede o redirecionamento imediato
        setTimeout(() => {
            router.push('/') // redireciona após o delay
        }, 1000) // tempo em milissegundos (1 segundo)
    }
    const handleLoginClick = (e) => {
        e.preventDefault() // impede o redirecionamento imediato
        setTimeout(() => {
            router.push('/PagesRouter/Login') // redireciona após o delay
        }, 1000) // tempo em milissegundos (1 segundo)
    }

    return (
        <>
            <nav>
                <ol className="navbar">
                    <li>
                        <a href="/" onClick={handleLogoClick}>
                            <img
                                className='logo'
                                src="../Logo-APS 1.png"
                                alt="imagem com um fone e um celular sendo trocados"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/PagesRouter/Login" onClick={handleLoginClick} >Login</a>
                    </li>
                </ol>
            </nav>
        </>
    )
}

export default DefaultNavBar

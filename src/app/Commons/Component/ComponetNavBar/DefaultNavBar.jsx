'use client'

import './DefaultNavBar.css'


const DefaultNavBar = () => {
    return (
        <>
           <nav>
                <ol className="navbar">
                    <li><a href="/"><img src="../Logo-APS 1.png" alt="imagem com um fone e um celular sendo trocados" /></a></li>
                    <li><a href="/PagesRouter/Login">Login</a></li>
                </ol>
           </nav>
        </>
    )
}

export default DefaultNavBar
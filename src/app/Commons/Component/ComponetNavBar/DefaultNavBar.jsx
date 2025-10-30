'use client'

import './DefaultNavBar.css'
import { useRouter } from 'next/navigation'

const DefaultNavBar = ({
  showLogo = true,
  showLogin = true,
  showLogout = true,
  showButton = true,
  delay = 1000 // opcional, pra controlar o tempo do redirecionamento
}) => {
  const router = useRouter()

  const handleLogoClick = (e) => {
    e.preventDefault()
    setTimeout(() => {
      router.push('/')
    }, delay)
  }

  const handleLoginClick = (e) => {
    e.preventDefault()
    setTimeout(() => {
      router.push('/PagesRouter/Login')
    }, delay)
  }

  return (
    <nav>
      <ol className="navbar">
        {showLogo && (
          <li>
            <a href="/" onClick={handleLogoClick}>
              <img
                className='logo'
                src="../Logo-APS 1.png"
                alt="imagem com um fone e um celular sendo trocados"
              />
            </a>
          </li>
        )}
        <div className="menuButtons">
          {showLogin && (
            <li>
              <a href="/PagesRouter/Login" onClick={handleLoginClick}>Login</a>
            </li>
          )}

          {showLogout && (
            <li>
              <a href="/PagesRouter/Home" onClick={handleLogoClick}>Logout</a>
            </li>
          )}

          {showButton && (
            <li>
              <button> Novo item </button>
            </li>
          )}
        </div>
      </ol>
    </nav>
  )
}

export default DefaultNavBar

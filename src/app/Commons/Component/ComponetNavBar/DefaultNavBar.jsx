'use client'

import './DefaultNavBar.css'
import { useRouter } from 'next/navigation'
import DefaultaButton from '../ComponentButton/DefaultButton.jsx'
import { Stack } from '@mui/material'

const DefaultNavBar = ({
  onClick = {},
  showLogo = true,
  showLogin = true,
  showLogout = true,
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
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={5}>
          {showLogin && (
            <a href="/PagesRouter/Login" onClick={handleLoginClick}>Login</a>
          )}

          {showLogout && (
            <a href="/PagesRouter/Home" onClick={handleLogoClick}>Logout</a>
          )}
        </Stack>
      </ol>
    </nav>
  )
}

export default DefaultNavBar

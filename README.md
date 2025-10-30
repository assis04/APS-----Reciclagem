# APS Reciclagem - Sistema de Gerenciamento de Reciclagem

Sistema web desenvolvido para gerenciamento e controle de reciclagem, utilizando Next.js e Material-UI.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (v15.4.1)
- [React](https://reactjs.org/) (v19.0.0)
- [Material-UI](https://mui.com/) (v7.2.0)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (v11.0.5)
- [Styled Components](https://styled-components.com/) (v6.1.19)

## 📋 Pré-requisitos

- Node.js
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/assis04/APS-----Reciclagem.git
cd APS-----Reciclagem
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── Commons/              # Componentes comuns
│   │   ├── Component/       # Componentes reutilizáveis
│   │   ├── Login/          # Página de login
│   │   ├── Password-Recovery/# Recuperação de senha
│   │   ├── Register/       # Página de registro
│   │   └── User/           # Página do usuário
│   ├── PagesRouter/        # Rotas das páginas
│   ├── Theme/              # Configuração de temas
│   ├── globals.css         # Estilos globais
│   ├── layout.js           # Layout principal
│   └── page.jsx            # Página inicial
```

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run start`: Inicia o servidor de produção
- `npm run lint`: Executa o linter

## 🎨 Funcionalidades

- Sistema de autenticação completo
- Recuperação de senha
- Interface responsiva
- Temas claro e escuro
- Notificações toast
- Barra de navegação personalizada
- Componentes reutilizáveis

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_API_URL=seu_endpoint_api
```

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✒️ Autores

* **Desenvolvedor** - *Trabalho Inicial* - [assis04](https://github.com/assis04)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

---
⌨️ com ❤️ por [assis04](https://github.com/assis04)

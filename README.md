# Scraping e Envio de E-mail com Node.js

Este projeto realiza o scraping de dados do site [Hacker News](https://news.ycombinator.com/) para coletar os títulos das notícias principais e envia essas informações por e-mail usando a integração com o Gmail.

## 📋 Funcionalidades

- **Scraping de Dados**:
  - Utiliza `axios` para fazer requisições HTTP.
  - Utiliza `cheerio` para manipular e extrair dados do HTML.
- **Envio de E-mails**:
  - Envia os dados coletados diretamente para um destinatário configurado via e-mail.
  - Usa `nodemailer` para integrar com o servidor SMTP do Gmail.
- **Configuração Personalizável**:
  - URL do site, credenciais de e-mail e destinatário são configurados via `.env`.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Axios**: Biblioteca para requisições HTTP.
- **Cheerio**: Ferramenta para manipulação de HTML, similar ao jQuery.
- **Nodemailer**: Biblioteca para envio de e-mails.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.

---

## 🚀 Como Usar

### 1. **Pré-requisitos**

- Node.js instalado na sua máquina.
- Uma conta Hotmail/Outlook.
- Ativação da autenticação de dois fatores (2FA) na conta Hotmail/Outlook e criação de uma senha de aplicativo.

### 2. **Configurar as Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo
TO_EMAIL=email_destino@gmail.com
SCRAP_URL=https://news.ycombinator.com/

# 🌤️ Consulta-Clima

> Uma aplicação web moderna e responsiva que permite aos usuários verificar a temperatura e as condições climáticas de qualquer localização do mundo em tempo real, utilizando a API OpenWeatherMap.

---

## 🚀 Sobre o Projeto

O **Consulta-Clima** é um site simples e intuitivo desenvolvido para fornecer dados meteorológicos precisos instantaneamente. O projeto foi construído utilizando **TypeScript** para garantir uma tipagem forte, menos bugs e uma lógica de frontend mais robusta, integrando-se diretamente aos serviços da OpenWeatherMap.

### 🛠️ Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---

## 🎯 Funcionalidades

- 🔍 **Busca por Cidade:** Digite o nome de qualquer local para obter os dados climáticos atuais.
- 🌡️ **Dados em Tempo Real:** Exibição de temperatura, sensação térmica, umidade e condições do céu.
- ⚡ **Tipagem Estática:** Desenvolvido em TypeScript para maior consistência e segurança no código.

---

## ⚙️ Como Executar o Projeto

Para rodar e testar esta aplicação localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/FelipeDelfinoDev/consulta-clima.git](https://github.com/FelipeDelfinoDev/consulta-clima.git)
cd consulta-clima
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Configurar variaveis de ambiente

Este projeto consome dados da OpenWeatherMap API. Para que ele funcione, você precisa de uma chave de acesso gratuita:

Renomeie o arquivo .env.example na raiz do projeto para .env.

Adicione a sua chave no arquivo criado:

```bash
APPID=sua_chave_da_api_aqui
```

### 4. Executar com Live Server

Para rodar a aplicação localmente com atualização em tempo real:

Abra a pasta do projeto no seu editor de código (como o VS Code).

Certifique-se de ter a extensão Live Server instalada.

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

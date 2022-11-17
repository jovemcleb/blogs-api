# Blogs API

## 👨🏽‍💻 Desenvolvedor

**Caleb Lima**

Linkedin: [https://www.linkedin.com/in/caleb-lima/](https://www.linkedin.com/in/caleb-lima/)

Github: [https://github.com/jovemcleb](https://github.com/jovemcleb)

Email: lima.carodoso.caleb@gmail.com

Celular: 91 980119059

## ****📝**** Descrição

Uma Api de Blogs que permite cadastrar usuários, criar posts, logar, modificar posts e deletar usuários e posts(CRUD). Para todas essas coisas, é necessário um usuário logado e este usuário pode modificar e deletar apenas os conteúdos que lhe pertencem.

## ****🔧 Tecnologias utilizadas****

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[Sequelize](https://sequelize.org/)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Docker](https://www.docker.com/)**
- **[MySQL](https://www.mysql.com/)**
- **[Joi](https://github.com/hapijs/joi)**
- **[Jwt](https://jwt.io/)**

> Veja o arquivo [package.json](https://github.com/jovemcleb/blogs-api/blob/main/package.json)
> 

## ****🚀 Rodando o projeto****

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

1. Primeiramente, clone o projeto com o seguinte comando:

```bash
git clone git@github.com:jovemcleb/blogs-api.git
```

2. Em seguida, entre no diretório e instale as dependências do projeto com:

```bash
npm install 
OU
yarn install
```

3. Crie um arquivo `.env` e preencha os seguintes campos:

```docker
#### SERVER VARS
NODE_ENV=development
API_PORT=

#### DATABASE VARS
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DB_NAME=
MYSQL_USER=
MYSQL_PASSWORD=

#### SECRECT VARS
JWT_SECRET=
```

4. Na raiz do diretório do projeto rode o comando: 

```bash
docker compose up

```

5. Agora basta rodar o comando:

```bash
npm start

OU

yarn start
--------------
#retorno do console: 'ouvindo porta ####'
```

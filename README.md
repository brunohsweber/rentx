<div align="center">
	    <img alt="Rocketseat" src="https://res.cloudinary.com/brunohsweber/image/upload/v1598031546/rocketseat_logo.png" width="200px"/>
</div>

<p align="center">
Um projeto do bootcamp Ignite - Trilha Node.js
</p>

<br>

<h1 align="center">
RentX API
</h1>

<br>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-informações-importantes">Importante!</a>
</p>

<br>

# Sobre o projeto

RentX é um projeto que está sendo desenvolvido nas aulas do bootcamp de Node.js da [Rocketseat](http://www.rocketseat.com.br).

O objetivo deste projeto é de construir uma API completa para aluguéis de carros, daí a origem do nome _RentX_.

Resumidamente, este projeto possibilita o gerenciamento completo de usuários, carros e aluguéis.

A construção do RentX tem como objetivo também aprender conceitos avançados de uma API e conhecer ferramentas e tecnologias para construir aplicações robustas, flexíveis e escaláveis com o uso do Node.js. E, para garantir a integralidade do código, está sendo utilizada a linguagem Typescript.

Este projeto está sendo desenvolvido aos poucos. A cada avanço nos módulos do treinamento é proposto um novo desafio para aumentar a complexidade e funcionalidades desta aplicação.

### :books: Documentação:

A documentação da API deste projeto está sendo construída com o Swagger e encontra-se na rota: http://localhost:3333/api-docs/

:warning: Atenção: Documentação ainda está em construção!

### :rocket: Tecnologias e Principais Ferramentas:

- Typescript
- Node.js
- Express
- Postgres
- TypeORM
- TSyringe
- Autenticação com JWT
- BCrypt.js
- Multer
- ...

## :information_source: Como Usar?

1 - Para executar esta aplicação, você precisará ter instalado no seu computador:

- Git
- Node.js
- Yarn
- Docker com Docker Compose
- Postgres
- Postbird ou Beekeeper
- Insomnia

2 - Para rodar a aplicação, realize cada uma das etapas abaixo no terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/brunohsweber/rentx

# Entre no repositório:
$ cd rentx

# Instale as dependências:
$ yarn

# Instancie o Docker com Docker-Compose para subir o container e iniciar a aplicação:
$ docker-compose up

# Para rodar as migrations:
$ yarn typeorm migration:run

# Para popular o usuário admin no banco de dados:
$ yarn seed:admin

# Para rodar os testes automatizados:
$ yarn test

# Para verificar a documentação que está em construção, acesse no navegador:
http://localhost:3333/api-docs/
```
**Para acessar as rotas já configuradas pelo Insomnia, é possível importar o arquivo JSON:** 
[Clique aqui para fazer o download do arquivo JSON](https://drive.google.com/file/d/1kWhdBlbPM3H-xWjGB3Q6Y2CNNEnWIL7H/view?usp=sharing)

<br>

## :warning: Informações Importantes

Este projeto ainda está **em desenvolvimento** e novas features serão lançadas nas próximas semanas.

<br>

---

Feito com ♥ por [Bruno Weber](https://brunoweber.com.br) :wave:
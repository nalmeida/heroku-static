# Heroku Static Deploy

> Inspirado no post original de [NAMAN AGGARWAL](https://dzone.com/articles/deploy-your-node-express-app-on-heroku-in-8-easy-s)

Este é um _starter_ / modelo para se fazer um _deploy_ de um site estático com _basic authentication_ no Heroku.

👉 O site funcionando pode ser visto em: https://heroku-static-sample.herokuapp.com/

#### Credenciais de acesso

* login: `admin`
* senha: `admin`

## Sobre o projeto

É um projeto de exemplo bastante simples com um processo de `build` que faz cópia dos arquivos de `./src` para `./dist` e substitui uma variável `__DATE__` dentro dos arquivos, só para registrar a dia e hora em que o último deploy foi feito.

Ele serve de modelo para projetos mais sofisticados e pode contar também com rotas dinâmicas servidas pelo `express`.

## Pré-requisitos

* `node` (testado na versão `v10.16.3` num Mac)
* `npm` (testado na versão `6.14.5` num Mac)
* `heroku` (testado na versão `heroku/7.46.2` num Mac) - [Instalação do Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Ter uma conta no [Heroku](https://www.heroku.com)

## Instalação

1. Clone este repositório
2. Rode o comando `npm install` para instalar as dependências node do projeto

## Rodando o projeto localmente

É um projeto bastante simples com 2 scripts:

#### [`./build.js`](./build.js)

1. Faz cópia dos arquivos `./src` para um diretório `./dist`
2. Substitui a variável `__DATE__` dentro de todos os arquivos onde ela aparecer pela data e hora em que o processo rodou

#### [`./server.js`](./server.js)

Sobe um servidor `express` que serve o diretório `./dist` estaticamente.

#### [`./Procfile`](./Procfile)

Contém as configurações do Heroku que, neste projeto, roda o `build` e já sobe o servidor (`server`) `express` através do comando `web: npm run build_and_serve`

### Comandos disponíveis no [`./package.json`](./package.json)

* `build`: roda o script de `build.js`
* `server`: roda o script de `server.js` utilizando o `nodemon` para atualizar sempre que o arquivo `server.js` for alterado
* `build_and_serve`: roda o script de `build` e `server` encadeados
* `deploy`: roda o comando de **deploy** (`git push heroku master`) no Heroku

## Criando seu projeto no Heroku

Os comandos abaixo só são necessários uma vez.

1. `heroku login` para se autenticar no Heroku
2. `heroku create NOME_DO_SEU_PROJETO` para criar a url de deploy do seu projeto

## Deploy no Heroku

1. `npm run deploy` para publicar o site

## Comandos úteis

* `heroku local` executa o comando de dentro do `./Procfile`
* `heroku domains` lista o domínio utilizado no projeto
* `heroku releases` lista os evendos de Deploy para a cloud do Heroku
* `heroku open` abre o domínio cadastrado no projeto no navegador
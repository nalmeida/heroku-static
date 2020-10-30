# Heroku Static Deploy

> Inspirado no post original de [NAMAN AGGARWAL](https://dzone.com/articles/deploy-your-node-express-app-on-heroku-in-8-easy-s)

Este é um _starter_ / modelo para se fazer um _deploy_ de um site estático com _basic authentication_ no Heroku.

👉 O site funcionando pode ser visto em: https://heroku-static-sample.herokuapp.com/

#### Acesso

* login: `admin`
* senha: `admin`

## Pré-requisitos

* `node` (testado na versão `v10.16.3` num Mac)
* `npm` (testado na versão `6.14.5` num Mac)
* `heroku` (testado na versão `heroku/7.46.2` num Mac) - [Instalação do Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Ter uma conta no [Heroku](https://www.heroku.com)

## Comandos úteis

* `heroku local` executa o comando de dentro do `./Procfile`
* `heroku domains` lista o domínio utilizado no projeto
* `heroku releases` lista os evendos de Deploy para a cloud do Heroku
* `heroku open` abre o domínio cadastrado no projeto no navegador
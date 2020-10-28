// @source: https://dzone.com/articles/deploy-your-node-express-app-on-heroku-in-8-easy-s
const express = require('express');
const basicAuth = require('express-basic-auth');

const port = process.env.PORT || 3000;

const app = express();

// @source: https://medium.com/javascript-in-plain-english/add-basic-authentication-to-an-express-app-9536f5095e88
app.use(basicAuth({
	users: { 'admin': 'admin' },
	challenge: true,
}));

app.use(express.static('dist/'))

app.get('*', function(req, res){
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>404</title><link rel="stylesheet" href="https://unpkg.com/modesto@latest/modesto.min.css"></head><body><main><h1>Error 404</h1><p> Page not found. </p><a href="/">Go to the home page.</a></main></body></html>', 404);
});

app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});


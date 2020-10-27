const express = require('express');
const basicAuth = require('express-basic-auth');

const port = process.env.PORT || 3000;

const app = express();

app.use(basicAuth({
	users: { 'admin': 'admin' },
	challenge: true,
}));

app.get('/', function(req, res) {
  res.send('<h1> Hello heroku-static!')
});

app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});


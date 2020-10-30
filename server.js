// @source: https://dzone.com/articles/deploy-your-node-express-app-on-heroku-in-8-easy-s
const path = require('path');
const express = require('express');
const basicAuth = require('express-basic-auth');
const morgan = require('morgan');
const helmet = require('helmet');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('common'));
app.use(helmet());

// @source: https://medium.com/javascript-in-plain-english/add-basic-authentication-to-an-express-app-9536f5095e88
app.use(basicAuth({
	users: { 'admin': 'admin' },
	challenge: true,
}));

app.use(express.static('dist/'))

app.get('*', function(req, res){
	res.status(404).sendFile(path.join(__dirname, 'dist/404.html'));
});

app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});


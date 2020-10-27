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

app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});


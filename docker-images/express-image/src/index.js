var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send( generatePasswords() );
});

app.listen(7777, function () {
	console.log('Accepting HTTP requests on port 7777.');
});

function generatePasswords() {
	var numberOfPasswords = chance.integer({
		min: 1,
		max: 10
	});
	console.log(numberOfPasswords);
	var passwords = [];
	for (var i = 0; i < numberOfPasswords; i++) {
		passwords.push(chance.string());
	}
	console.log(passwords);
	return passwords;
}
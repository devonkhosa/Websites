const express = require('express');
const app = express();
/* const port = 8080; */

/* const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const db = client.db('contact'); */

app.set('view engine', 'pug');
app.use(express.static('public'));



app.get('/', (req, res)=>{
    res.render('index', {});
});
app.get('/contact', (req, res)=>{
    res.render('contact', {});
});
app.get('/prices', (req, res)=>{
    res.render('prices', {});
});
app.get('/privacy', (req, res)=>{
    res.render('privacy', {});
});

app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('comics');
		const collection = db.collection('superheroes');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});

/* MongoClient.connect(url, function(err, client) {
	const db = client.db('contact-us');
	const collection = db.collection('contacts');

	collection.find({}).toArray((error, documents) => {
		console.log(documents);
		client.close();
	});
}); 
MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
});
*/

app.listen(process.env.PORT || 8080, () =>{
    console.log(`Server running on port 8080`);
});
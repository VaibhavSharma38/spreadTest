const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const words = require('./dictionary');

const crypto = require('crypto');
const secret = 'abcdefg';

// const hash = crypto.createHmac('sha256', secret)
//                    .update('I love cupcakes')
//                    .digest('hex');

mongo.connect(url, function (err, client) {
	if (err) {
    	console.error(err);
    	return;
  	}

  	const db = client.db('spreadTest');
  	const collection = db.collection('wordHash');



  	// collection.insertOne({}, function(err, response){
  	// 	if(err){
  	// 		console.log(err);
  	// 	}
  	// });
});
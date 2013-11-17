var mongoose = require('mongoose');
a = mongoose.connect('mongodb://nafeez:secret123@ds053788.mongolab.com:53788/dom-storm');




var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log('Connected !');
	var kittySchema = mongoose.Schema({name: String});
	
	kittySchema.methods.speak = function () {
		var greeting = this.name? "Meow name is " + this.name : "I don't have a name";
		console.log(greeting);
		}
	var Kitten = mongoose.model('Kitten', kittySchema)
	
	var fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak() // "Meow name is fluffy"
	
	fluffy.save(function (err, fluffy) {
		if (err) // TODO handle the error
		fluffy.speak();
	});
  
  
	Kitten.find(function (err, kittens) {
		if (err) // TODO handle err
		console.log(kittens)
	})
});


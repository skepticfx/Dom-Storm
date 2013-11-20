
/*
 * Controllers. This routes everything under the sun.
 */

  
// All Local routing goes here. 
exports.set = function(app){
	// Home page
	app.get('/', function(req, res){ 
		res.render('index', {'title': 'Home Page'});	
	});


};
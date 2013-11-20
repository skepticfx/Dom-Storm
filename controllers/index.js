/*
 * Controllers. This routes everything under the sun.
 */

var modules = require(process.cwd()+'/controllers/modules.js'); 
 
// All Local routing goes here. 
exports.set = function(app){
	// Home page
	app.get('/', function(req, res){ 
		res.render('index', {'title': 'Home Page'});	
	});

	// Modules
	modules.create(app); // More specific routes comes first.
	modules.index(app);

	
	
};
// Routes for anything '/modules' related

var fs = require('fs');

// Loads the module home and individual modules
exports.index = function(app){

	app.get('/modules', function(req, res){
		if(typeof req.query.id != 'undefined'){
			var module_id = req.query.id;
			var module_path = process.cwd()+'/models/core/modules/' + module_id + '.js';
			var module_object = require(module_path);
			res.render('modules/getModule', {
			'module_id': module_id,
			'module_name': module_object.name,
			'module_description': module_object.description,
			'module_results': module_object.results
			});	
		} else {
			res.render('modules/index', {'title': 'Modules'});	
		}
	});

}

// Creates a new module
exports.create = function(app){
	// Should be made post.
	app.get('/modules/create', function(req, res){
		app.render('modules/createModule', {
		'module_path': '/test_modules/new',
		'module_name': 'someName',
		'module_description': 'someDescription',
		'module_results': {'state' : 'NOT_STARTED'},
		'module_userScript': 'var a;'
		}, function(err, html){
			fs.writeFile(process.cwd()+'/models/core/modules/someName.js', html, function (err) {
			if (err) throw err;
			console.log('It\'s saved!');
			res.end('Good Boy');
			});
		});
		
	});

}
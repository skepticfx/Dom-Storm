// Routes for anything '/modules' related
//528d5206a81f151412000002
var fs = require('fs');
var Modules = require(process.cwd()+'/models/db/mongo.js').Modules;

// Loads the module home and individual modules
exports.index = function(app){

	app.get('/modules', function(req, res){
		if(typeof req.query.id != 'undefined'){
			var module_id = req.query.id;
			var module = Modules.getModuleById(module_id, function(err, module){
				if(err){
					res.render('misc/error', {'info': 'Apparently, the module is missing in our system.'});
					res.end();
				} else {
					var module_details = {
					'module_id': module._id,
					'module_name': module.name,
					'module_description': module.description,
					'module_results': module.results,
					'module_test': module.test
					};
					res.render('modules/getModule', module_details);
				}
			});
		} else {
			res.render('modules/index', {'title': 'Modules'});	
		}
	});

}

// Loads and runs the module test page from /models/core/modules_test/
exports.run = function(app){

	app.get('/modules/run', function(req, res){
		if(typeof req.query.id != 'undefined'){
			var module_id = req.query.id;
			var module = Modules.getModuleById(module_id, function(err, module){
				if(err){
					res.render('misc/error', {'info': 'If you\'re seeing this page, something has really gone wrong:('});
				}
				var module_details = {
				'module_id': module._id,
				'module_name': module.name,
				'module_description': module.description,
				'module_results': module.results,
				'module_test': module.test
				};
				
				switch(module_details.module_test._type){
				case "ENUM_FUNCTION":
				res.render('modules/runModule_enum_function', module_details);	
				break;
				
				default:
				res.render('misc/error', {'info': 'The Test Type is not function yet'});
				}
			});
		} else {
			res.status(404);
			res.render('misc/404', {'info': 'Missing module id.' });	
		}
	});

}

// Creates a new module
exports.create = function(app){

	// The UI
	app.get('/modules/create', function(req, res){
		res.render('modules/createModule', {'title':'Create a new Module'});
	});

	// Form
	app.post('/modules/create', function(req, res){
		var results = {};
		results.type = 'SIMPLE_TABLE';
		var test = {};
		test.state = 'NOT_STARTED'; // ERROR, COMPLETE
		test.type = req.body._type;
		test.userScript = req.body._userScript;

		var newObj = {};
		newObj.results = results;
		newObj.test = test;
		newObj.name = req.body._name;
		newObj.description = req.body._desc;

		Modules.add(newObj, function(err, obj){
			if(err){
				res.render('misc/error', {'info': 'Something wrong happened, when we tried creating your new module.'});
			} else {
				res.end(obj._id + " Module Successfully created.");
			}
		});
	});	
	


}
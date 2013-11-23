// Routes for anything '/modules' related
//528dd7c1c6bbedf415000002
var fs = require('fs');
var Modules = require(process.cwd()+'/models/Modules.js').Modules;

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
				res.render('misc/error', {'info': 'The Test Type is not defined yet'});
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
		results.type = req.body._results_type;
		var test = {};
		test.state = 'NOT_STARTED'; // ERROR, COMPLETE
		test.type = req.body._module_type;
		test.userScript = req.body._userScript;
		test.enum_data = req.body._enum_data;

		var newModule = {};
		newModule.results = results;
		newModule.test = test;
		newModule.name = req.body._name;
		newModule.description = req.body._desc;

		Modules.add(newModule, function(err, module){
			if(err){
				res.render('misc/error', {'info': 'Something wrong happened, when we tried creating your new module.'});
			} else {
				res.redirect('/modules/?id='+ module._id);
			}
		});
	});	
	


}




exports.results = function(app){

	// Can be Ajax
	app.post('/modules/results/update', function(req, res){
		var module_id = req.body._module_id;
		var results = {};
		results.raw = req.body._results_raw;
		var browser = {};
		browser.name = req.body._browser;
		browser.raw = '';
		var test = {};
		test.state = 'COMPLETED'; //  COMPLETE

		Modules.findOneAndUpdate({'_id': module_id}, {'results.raw': results.raw, $push: {'results.browsers': browser}, 'test.state': test.state},  function(err, result){
			if(err){
				res.render('misc/error', {'info': 'Something wrong happened, when we tried creating your new module.'});
			} else {
				console.log("adasdasdasasdds" +result);
				var Obj = {}
				Obj.name = result.name;
				Obj.id = result._id;
				fs.appendFile(process.cwd()+'/public/js/modulesList.js', 'topModules.push('+ JSON.stringify(Obj) + ');', function(err){
					if(err){
						console.log('There is some error in writing the list to modulesList.js');
					} else {
						console.log('Great ! Updated the list of modules in modulesList.js');
					}				
				});
				res.redirect('/modules/?id='+ module_id);
			}
		});
	});	
	
}
// console.log = function(){};
// This file is also used to store contexts in the future. 

var require_tree = require('require-tree');
var ds_modules = require_tree('./ds_modules');
var filesys = require("fs");


// Routing and handling Modules
var route_modules = function(query, response){
console.log(ds_modules[query['id']]);	
	if(query['id'] != 'undefined' && typeof ds_modules[query['id']] != 'undefined'){
		var module_id = query['id'];
		var module_name = ds_modules[module_id].module_name;
		var module_description = ds_modules[module_id].module_description;
		var module_results = ds_modules[module_id].results;
		if(module_results.state == 'NOT_STARTED')
			module_results = "This module appears to be new to the system. Please run the test, to view the results."
		if(module_results.state == 'ERROR')
			module_results = "The last time this module was run, it ran in to an error. Please re-run the test to get some results. And yea, Good Luck with that."			
		console.log(module_results);
		
		// Hackiest way to generate dynamic pages for modules. Will have to research proper framework here. I really don't like Express as of today.(11/18/2013)
		filesys.readFile("./pages/modules_skeleton.html", function(err, file) {
			response.writeHeader(200, {"Content-Type": "text/html"});
			file = file.toString();
			file = file.replace(/__MODULE_NAME__/g, module_name);
			file = file.replace(/__MODULE_DESCRIPTION__/g, module_description);
			file = file.replace(/__MODULE_RESULTS__/g, module_results);
			file = file.replace(/__MODULE_SCRIPT_URL__/g, "/ds_modules_scripts/M_"+module_id+'.html');
			response.write(file);
			response.end();
			});
		} else{
		response.writeHeader(302, {"Location": "utils/error"});
		response.end();
	}

}


exports.route_modules = route_modules;
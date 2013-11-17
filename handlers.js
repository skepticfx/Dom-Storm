// console.log = function(){};
// This file is also used to store contexts in the future. 

var require_tree = require('require-tree');
var ds_modules = require_tree('./ds_modules');
			
var route_modules = function(query, response){
console.log(ds_modules[query['id']]);	
	if(query['id'] != 'undefined' && typeof ds_modules[query['id']] != 'undefined'){
		var module_id = query['id'];
		a = ds_modules[module_id].results;
		console.log(a);
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.write(a);
		response.end();
		} else{
		response.writeHeader(302, {"Location": "utils/error"});
		response.end();
	}

}


exports.route_modules = route_modules;
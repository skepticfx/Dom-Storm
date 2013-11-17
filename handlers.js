 console.log = function(){};
// This file is also used to store contexts in the future. 

var alert_user = require('./core/example.js');
				
var api = function(query, response){
	if(query['type'] != 'undefined' && query['type'] == 'example'){
		alert_user(function(result){
			response.writeHeader(200, {"Content-Type": "text/html"});
			response.write(result);
			response.end();
		});
	} else{
		response.writeHeader(302, {"Location": "utils/error"});
		response.end();
	}

}


exports.api = api;
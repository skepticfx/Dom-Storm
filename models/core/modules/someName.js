

// /test_modules/new.js 
console.log("someName called");

// Global variables to be set.

var MODULE_NAME = "someName";
var MODULE_DESCRIPTION = "someDescription";

// Has to come from DB.

// Library


// User can call this in the script
var results = {};
results.state = 'NOT_STARTED'; // ERROR, COMPLETE
results.code = 'success';

// This is the userScript which the Module Creator gives.
// We have this inside an function with a closure

try{
	var userScript = function(){
		

	var a;

	}

}

catch(err){
	results.code = 'error';
}

exports = module.exports = { 
	results: results, 
	name: MODULE_NAME.toString(), 
	description: MODULE_DESCRIPTION.toString()

};
// document_domain_overriding.js
console.log("document_domain_overriding called");

// Global variables to be set.

var MODULE_NAME = "Document.Domain Overriding";
var MODULE_DESCRIPTION = "Checks whether document.domain can be overriden from the same domain.";

// Has to come from DB.

// Library


// User can call this in the script
var results = {};
results.state = 'NOT_STARTED';


// Where the user really writes a scanner.
// Users can write just some JS Files to scan stuff.
// Or they can rather create one from an UI. PS: this is better.

var test = function(){
	


console.log('1');
}


exports = module.exports = { 
	results: results, 
	module_name: MODULE_NAME.toString(), 
	module_description: MODULE_DESCRIPTION.toString()

};
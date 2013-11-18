//xhr_unsafe_headers.js
console.log("xhr_unsafe_headers called");

// Global variables to be set.

var MODULE_NAME = "Unsafe XHR Headers";
var MODULE_DESCRIPTION = "Checks the allowed list of unsafe headers by the XMLHttpRequest Object.";

// Where the user really writes a scanner.
// Users can write just some JS Files to scan stuff.
// Or they can rather create one from an UI. PS: this is better.
// This specific scan also requires a Server-Side to respond with what all the request headers, the client sent, because we don't have DOM Exceptions for XHR :(
// Has to come from DB.
var results = "";

// Where the user really writes a scanner.
// Users can write just some JS Files to scan stuff.
// Or they can rather create one from an UI. PS: this is better.

var test = function(){
	


console.log('1');
}


exports = module.exports = { 
	results: results.toString(), 
	module_name: MODULE_NAME.toString(), 
	module_description: MODULE_DESCRIPTION.toString()

};
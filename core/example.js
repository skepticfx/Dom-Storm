// example.js 
// This API alerts something to the user.
// You can make this expose a lot more than just an alert.
// Try prompting for a change.
console.log("called example.js");
var alert_user = function(callback){

	console.log("called alert_user");
	callback("<h1>Example Alert API</h1><script>alert('This API serves you some Example.');</script>");

}

module.exports = alert_user;
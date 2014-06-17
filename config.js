// First things first
// Set up a mongoDB instance and update DB_URL below.
// By Default, there is no Auth used (Twitter Sign-In). To enable it, set requireAuth to 'true' and setup the admin name as your twitter handle.
// Leave the 'config.admin' as 'admin' if you are not using Auth Mode.
// Raise an issue if something does'nt work.

var config = {};

exports.config = config;


config.DB_URL = 'mongodb://fx:fx@127.0.0.1/domstorm'; // Local Mongo Instance
config.CALLBACK_URL = "http://localhost:8080/auth/twitter/callback";

// To Use DomStorm in No-Auth mode (No Twitter Login required), set the below property to false and choose an admin name;

config.requireAuth = false;

config.admin = 'admin'; // Twitter Username of the Admin account. Leave this as it is, if requireAuth is 'false'



// Fill this up, if you're using authMode
config.TWITTER_CONSUMER_KEY = "";
config.TWITTER_CONSUMER_SECRET = "";

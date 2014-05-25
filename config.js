var config = {};

exports.config = config;

if(process.env.OPENSHIFT_MONGODB_DB_URL)
  config.DB_URL = process.env.OPENSHIFT_MONGODB_DB_URL + 'domstorm';
else
  config.DB_URL = 'mongodb://fx:fx@127.0.0.1/domstorm'; // Local Mongo Instance


config.TWITTER_CONSUMER_KEY = "";
config.TWITTER_CONSUMER_SECRET = "";

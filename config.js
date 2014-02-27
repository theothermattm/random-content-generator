var config = {};

/*
 *  Change these configurations to adjust the 
 *  runtime settings of the application.
 
 *  You can also specify these as environmental variables.
 */

// the port the app runs on
config.app_port = process.env.PORT || 3000;

// the maximum size of the random content in KB
config.max_random_size_kb = process.env.MAX_RANDOM_SIZE_KB || 20000;


module.exports = config;
// load the local app config based on the environment

module.exports = require('./environments/' + (process.env.ENVIRONMENT || 'development') + '/local.js');



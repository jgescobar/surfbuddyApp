var _ = require('lodash');

var localEnvVars = {
  TITLE:      'surfbuddyApp',
  SAFE_TITLE: 'surfbuddyApp'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

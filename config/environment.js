var _ = require('lodash');

var localEnvVars = {
  TITLE:      'SurfBuddy',
  SAFE_TITLE: 'SurfBuddy'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

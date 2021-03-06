var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'javascript'
    },
    port: 3000,
    db: 'mongodb://localhost/javascript-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'javascript'
    },
    port: 3000,
    db: 'mongodb://localhost/javascript-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'javascript'
    },
    port: 3000,
    db: 'mongodb://localhost/javascript-production'
  }
};

module.exports = config[env];

process.env.NODE_ENV = 'test';
require('babel-register')();

require.extensions['.css'] = function () {return null;};
require.extensions['.scss'] = function () {return null;};
require.extensions['.gif'] = function(){ return null; }
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

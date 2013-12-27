var stylus = require('stylus')
  , hipstyl = hipstyl || {}
  ;

hipstyl.path = __dirname + 'lib';

hipstyl.middleware = function(str, path) {
  return stylus(str).set('filename', path).use(css());
}

hipstyl.css = function() {
  return function (style) {
    style.include(__dirname);
    style.import('lib');
  };
}

module.exports = hipstyl;
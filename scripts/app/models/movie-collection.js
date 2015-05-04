let Collection = require('ampersand-collection');
let MovieModel = require('./movie-model');

module.exports = Collection.extend({
  mainIndex: 'id',
  model: MovieModel
});
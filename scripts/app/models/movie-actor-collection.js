let Collection = require('ampersand-collection');
let Actor = require('./movie-actor-model');

module.exports = Collection.extend({
  mainIndex: 'id',
  model: Actor
});

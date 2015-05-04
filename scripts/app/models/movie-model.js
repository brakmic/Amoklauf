let Model = require('ampersand-model');
let ActorCollection = require('./movie-actor-collection');

module.exports = Model.extend({
  idProperty: 'id',
  props: {
    id: 'number',
    title: 'string',
    synopsis: 'string',
    poster: 'string'
  },
  collections: {
    stars: ActorCollection
  }
});
let Model = require('ampersand-model');

module.exports = Model.extend({
  idProperty: 'id',
  props: {
    id: 'number',
    title: 'string',
    synopsis: 'string',
    stars: 'array',
    poster: 'string'
  }
});
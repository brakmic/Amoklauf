let Model = require('ampersand-model');

module.exports = Model.extend({
  idProperty: 'id',
  props: {
    id: 'number',
    firstName: 'string',
    lastName: 'string',
  },
  derived: {
    fullName: {
      deps: ['firstName', 'lastName'],
      fn: function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  }
})
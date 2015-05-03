let Model = require('ampersand-model');
//this is an AmpersandJS Model example
module.exports = Model.extend({
    props: {
        id: 'string',
        firstName: {
        type: 'string',
        default: function() {
            return 'Anonymous';
        }
    },
        lastName: {
            type: 'string',
            default: function() {
                return 'User';
            }
        },
    },
    session: {
        loggedOn: 'boolean',
        default: function() {
            return false;
        }
    },
    derived: {
        fullName: {
            deps: ['firstName', 'lastName'],
            fn: function() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
});

const { authenticate } = require('@feathersjs/authentication').hooks;

const local = require('@feathersjs/authentication-local');
const uuidv4 = require('uuid/v4');

const itemId = context => {
  context.data.userId = uuidv4();

  return context;
};

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ async (context) => {
      itemId(context);
      local.hooks.hashPassword({ passwordField: 'password' });
    }],
    update: [  authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

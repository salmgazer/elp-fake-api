const { authenticate } = require('@feathersjs/authentication').hooks;

const local = require('@feathersjs/authentication-local');
const uuidv4 = require('uuid/v4');

const itemId = context => {
  context.data.userId = uuidv4();

  return context;
};

module.exports = {
  before: {
    all: [
      local.hooks.protect('password')
    ],
    find: [ authenticate('jwt') ],
    get: [ /*authenticate('jwt')*/ ],
    create: [
      async (context) => itemId(context),
      local.hooks.hashPassword('password'),
    ],
    update: [  authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [local.hooks.protect('password')],
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

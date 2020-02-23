const { Service } = require('feathers-knex');

exports.Branches = class Branches extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'branches'
    });
  }
};

const { Service } = require('feathers-knex');

exports.Manufacturers = class Manufacturers extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'manufacturers'
    });
  }
};

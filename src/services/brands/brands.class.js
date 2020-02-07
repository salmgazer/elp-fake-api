const { Service } = require('feathers-knex');

exports.Brands = class Brands extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'brands'
    });
  }
};

const { Service } = require('feathers-knex');

exports.ProductGroups = class ProductGroups extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'product_groups'
    });
  }
};

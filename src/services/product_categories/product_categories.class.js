const { Service } = require('feathers-knex');

exports.ProductCategories = class ProductCategories extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'product_categories'
    });
  }
};

const { Service } = require('feathers-knex');

exports.BusinessCategories = class BusinessCategories extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'business_categories'
    });
  }
};

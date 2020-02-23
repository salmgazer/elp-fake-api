const { Service } = require('feathers-knex');

exports.Companies = class Companies extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'companies'
    });
  }
};

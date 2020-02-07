// Initializes the `brands` service on path `/brands`
const { Brands } = require('./brands.class');
const createModel = require('../../models/brands.model');
const hooks = require('./brands.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/brands', new Brands(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('brands');

  service.hooks(hooks);
};

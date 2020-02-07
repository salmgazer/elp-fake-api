// Initializes the `product_groups` service on path `/product_groups`
const { ProductGroups } = require('./product_groups.class');
const createModel = require('../../models/product_groups.model');
const hooks = require('./product_groups.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product_groups', new ProductGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product_groups');

  service.hooks(hooks);
};

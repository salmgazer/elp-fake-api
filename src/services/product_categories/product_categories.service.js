// Initializes the `product_categories` service on path `/product_categories`
const { ProductCategories } = require('./product_categories.class');
const createModel = require('../../models/product_categories.model');
const hooks = require('./product_categories.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product_categories', new ProductCategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product_categories');

  service.hooks(hooks);
};

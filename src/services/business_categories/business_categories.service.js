// Initializes the `business_categories` service on path `/business_categories`
const { BusinessCategories } = require('./business_categories.class');
const createModel = require('../../models/business_categories.model');
const hooks = require('./business_categories.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/business_categories', new BusinessCategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('business_categories');

  service.hooks(hooks);
};

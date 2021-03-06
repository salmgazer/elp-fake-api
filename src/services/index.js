const users = require('./users/users.service.js');
const brands = require('./brands/brands.service.js');
const productCategories = require('./product_categories/product_categories.service.js');
const productGroups = require('./product_groups/product_groups.service.js');
const products = require('./products/products.service.js');
const manufacturers = require('./manufacturers/manufacturers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(brands);
  app.configure(productCategories);
  app.configure(productGroups);
  app.configure(products);
  app.configure(manufacturers);
};

/* eslint-disable no-console */

// products-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'products';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('name').notNullable();
        table.float('costPrice').notNullable();
        table.float('sellingPrice').notNullable();
        table.float('weight').notNullable();
        table.integer('manufacturerId');
        table.foreign('manufacturerId').references('manufacturers.id');
        table.integer('brandId');
        table.foreign('brandId').references('brands.id');
        table.integer('productCategoryId');
        table.foreign('productCategoryId').references('product_categories.id');
        table.integer('productGroupId');
        table.foreign('productGroupId').references('product_groups.id');

      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};

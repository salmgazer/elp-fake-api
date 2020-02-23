/* eslint-disable no-console */

// branches-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'branches';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('name');
        table.date('startDate');
        table.string('ownerId').notNullable();
        table.foreign('ownerId').references('users.id');
        table.string('address');
        table.string('community');
        table.string('gps');
        table.string('logo');
        table.string('phone'); // use company details
        table.string('whatsAppPhone');
        table.integer('companyId');
        table.foreign('companyId').references('companies.id');
        table
          .timestamp('createdAt')
          .notNullable()
          .defaultTo(db.raw('now()'));
        table
          .timestamp('updatedAt')
          .notNullable()
          .defaultTo(db.raw('now()'));
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });


  return db;
};

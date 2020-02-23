/* eslint-disable no-console */

// users-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'users';

  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.uuid('userId').notNullable().primary();
        table.string('email');
        table.string('password').notNullable();
        table.string('firstName').notNullable();
        table.string('otherNames').notNullable();
        table.string('phone').notNullable();
        table.string('username').notNullable();
        table.enu('gender', ['male', 'female']);
        table.string('whatsAppPhone');
        table.string('status');
        table.string('otp');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};

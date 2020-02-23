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
        table.increments('id'); /*@todo remove from core-api */
        table.uuid('userId').notNullable();
        table.string('email');
        table.string('password').notNullable();
        table.string('firstName');
        table.string('otherNames');
        table.string('phone');
        table.string('username');
        table.enu('gender', ['male', 'female']);
        table.string('whatsAppPhone');
        table.string('status');
        table.string('otp');
        table.string('auth0Id'); /*@todo remove from core-api */
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
};

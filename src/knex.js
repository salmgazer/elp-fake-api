const knex = require('knex');

module.exports = function (app) {
  const { client, connection } = app.get('postgres');
  console.log("+++++++++++++++++++++++++++++");
  console.log("+++++++++++++++++++++++++++++");
  console.log(connection);
  console.log("+++++++++++++++++++++++++++++");
  console.log("+++++++++++++++++++++++++++++");
  const db = knex({ client, connection });

  app.set('knexClient', db);
};

exports.up = async (knex) => {
  await knex.schema.alterTable('products', (table) => {
    table.string('description');
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable('products', (table) => {
    table.dropColumn('description');
  });
};

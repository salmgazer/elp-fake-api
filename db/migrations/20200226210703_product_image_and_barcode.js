exports.up = async (knex) => {
  await knex.schema.alterTable('products', (table) => {
    table.string('image').notNullable().defaultTo('no_image.png');
    table.string('barcode');
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable('products', (table) => {
    table.dropColumn('image');
    table.dropColumn('barcode');
  });
};

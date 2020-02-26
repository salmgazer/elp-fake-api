exports.up = async (knex) => {
  await knex.schema.alterTable('companies', (table) => {
    table.integer('businessCategoryId').notNullable();
    table.foreign('businessCategoryId').references('business_categories.id');
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable('companies', (table) => {
    table.dropColumn('businessCategoryId');
  });
};

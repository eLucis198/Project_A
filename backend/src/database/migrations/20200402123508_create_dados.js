
exports.up = function(knex) {
  return knex.schema.createTable('dados', function (table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('endereco').notNullable();
    table.string('job').notNullable();
    table.string('hobby').notNullable();
    table.string('team').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('dados');
};

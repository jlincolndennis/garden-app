
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id');
      table.string('username').unique();
      table.string('password')
    })

    .createTable('gardens', function(table){
      table.increments('id');
      table.string('garden_name');
      table.integer('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at')
        .notNullable()
        .defaultTo(knex.raw('now()'));
    })

    .createTable('plants', function(table) {
      table.increments('id');
      table.string('name');
      table.string('type');
      table.integer('pot_no');
      table.integer('yield');
      table.integer('garden_id')
        .references('gardens.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('plants')
    .dropTable('gardens')
    .dropTable('users')
};

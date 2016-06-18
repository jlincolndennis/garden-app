
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('gardens').del(),

    // Inserts seed entries
    knex('gardens').insert({
      garden_name: 'Test Garden',
      user_id: 1
    })
  );
};

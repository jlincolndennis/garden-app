
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('plants').del(),

    // Inserts seed entries
    knex('plants').insert({
      name: 'Plant 1',
      type: 'tomato',
      pot_no: 1,
      garden_id: 1}),
    knex('plants').insert({
      name: 'Plant 2',
      type: 'tomato',
      pot_no: 2,
      garden_id: 1}),
    knex('plants').insert({
      name: 'Plant 3',
      type: 'pepper',
      pot_no: 3,
      garden_id: 1})
  );
};

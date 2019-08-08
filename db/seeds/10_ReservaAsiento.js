
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ReservaAsiento').del()
    .then(function () {
      // Inserts seed entries
      return knex('ReservaAsiento').insert([
        {
          id: 1, 
          estado: 'Ocupado'
        },
        {
          id: 2, 
          estado: 'Disponible'
        }
      ]);
    });
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('FormatoVideo').del()
    .then(function () {
      // Inserts seed entries
      return knex('FormatoVideo').insert([
        {
          id: 1, 
          nombre: '2D',
          precio: 5.00
        },
        {
          id: 2, 
          nombre: '3D',
          precio: 6.00
        },
      ]);
    });
};

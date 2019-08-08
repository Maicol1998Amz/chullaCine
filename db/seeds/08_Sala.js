
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Sala').del()
    .then(function () {
      // Inserts seed entries
      return knex('Sala').insert([
        {
          id: 1,
          codigo:1,
          nombre: 'alfa',
          idPelicula: 1
        },
        {
          id: 2,
          codigo:1,
          nombre: 'beta',
          idPelicula: 2
        },
        {
          id: 3,
          codigo:1,
          nombre: 'alfa',
          idPelicula: 3
        },
        {
          id: 4,
          codigo:1,
          nombre: 'beta',
          idPelicula: 4
        },
      ]);
    });
};

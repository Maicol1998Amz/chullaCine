
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cliente').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cliente').insert([
        {
          id: 1, 
          cedula: '1723541234',
          nombre: 'Maicol',
          apellido: 'Murillo',
          email: 'mai@gmail.com',
          contraseña: '12345'
        }
      ]);
    });
};

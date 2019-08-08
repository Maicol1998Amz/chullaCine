exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Administrador').del()
    .then(function () {
      // Inserts seed entries
      return knex('Administrador').insert([
        {
          id: 1, 
          nombre: 'Admin',
          usuario: 'Admin',
          contrasena: '12345'
        }
      ]);
    });
};

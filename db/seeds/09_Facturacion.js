exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Facturacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('Facturacion').insert([
        {
          id: 1, 
          codigo: 1,
          idCliente: 1,
        }
      ]);
    });
};

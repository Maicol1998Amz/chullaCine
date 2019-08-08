exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('HoraFecha').del()
    .then(function () {
      // Inserts seed entries
      return knex('HoraFecha').insert([
        {
          id: 1, 
          fecha: '2019/07/28',
          hora: '12:00:00'
        },
        {
          id: 2, 
          fecha: '2019/07/28',
          hora: '15:00:00'
        },
        {
          id: 3, 
          fecha: '2019/07/28',
          hora: '18:00:00'
        },
        {
          id: 4, 
          fecha: '2019/07/28',
          hora: '21:00:00'
        }
      ]);
    });
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Asiento').del()
    .then(function () {
      // Inserts seed entries
      return knex('Asiento').insert([
        {
          id: 1,
          numero: 1,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 2,
          numero: 2,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 3,
          numero: 3,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 4,
          numero: 4,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 5,
          numero: 5,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 6,
          numero: 6,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 7,
          numero: 7,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 8,
          numero: 8,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 9,
          numero: 9,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 10,
          numero: 10,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 11,
          numero: 11,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 12,
          numero: 12,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 13,
          numero: 13,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 14,
          numero: 14,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 15,
          numero: 15,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 16,
          numero: 16,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 17,
          numero: 17,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 18,
          numero: 18,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 19,
          numero: 19,
          idSala: 1,
          idReservaAsiento: 2
        },
        {
          id: 20,
          numero: 20,
          idSala: 1,
          idReservaAsiento: 2
        },
      ]);
    });
};

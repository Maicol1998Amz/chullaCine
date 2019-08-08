
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actor').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actor').insert([
        { 
          id: 1, 
          nombre: 'Dwayne',
          apellido: 'Johnson',
          idPelicula: 1  
        },
        { 
          id: 2, 
          nombre: 'Idris',
          apellido: 'Elba',
          idPelicula: 1
        },
        { 
          id: 3, 
          nombre: 'Dave',
          apellido: 'Bautista',
          idPelicula: 2
        },
        { 
          id: 4, 
          nombre: 'Karen',
          apellido: 'Gillan',
          idPelicula: 2
        },
        { 
          id: 5, 
          nombre: 'Chiwetel',
          apellido: 'Ejiofor',
          idPelicula: 3
        },
        { 
          id: 6, 
          nombre: 'Seth',
          apellido: 'Rogen',
          idPelicula: 3
        }
      ]);
    });
};

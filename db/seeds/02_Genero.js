
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Genero').del()
    .then(function () {
      // Inserts seed entries
      return knex('Genero').insert([
        { 
          id: 1, 
          nombre: 'Accion',
          descripcion: 'Este tipo de película son de alta tensión y contienen persecuciones y muchas peleas'
        },
        { 
          id: 2, 
          nombre: 'Aventura',
          descripcion: 'Estas películas cuentan historias interesantes y excitantes en contextos normalmente exóticos'
        },
        { 
          id: 3, 
          nombre: 'Comedia',
          descripcion: 'películas divertidas, construidas para que el espectador pase un rato divertido y no deje de reír'
        },
        { 
          id: 4, 
          nombre: 'Drama',
          descripcion: 'Son películas serias, con personajes y situaciones muy realistasr'
        },
        { 
          id: 5, 
          nombre: 'Terror',
          descripcion: ' pretenden despertar nuestro miedo con escenas chocantes, tensas y terroríficas,'
        }
      ]);
    });
};

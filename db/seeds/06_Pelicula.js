exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Pelicula').del()
    .then(function () {
      // Inserts seed entries
      return knex('Pelicula').insert([
        { 
          id: 1, 
          titulo: 'Rapidos y Furiosos',
          duracion: '135 min',
          imagen: 'https://www.supercines.com/MovieImages/20190426Mov003/xxhdpi.jpg',
          idGenero: 1,
          idAdmin: 1, 
          idCliente: 1 ,
          idHoraFecha: 1,
          idFormatoVideo: 2
         },
         { 
          id: 2, 
          titulo: 'Stuber: Loco al Volante',
          duracion: '93 min',
          imagen: 'https://www.supercines.com/MovieImages/20190705Mov002/xxhdpi.jpg',
          idGenero: 3,
          idAdmin: 1,
          idCliente: 1,
          idHoraFecha: 2,
          idFormatoVideo: 2
         },
         { 
          id: 3, 
          titulo: 'El Rey León',
          duracion: '117 min',
          imagen: 'https://www.supercines.com/MovieImages/20190704Mov001/xxhdpi.jpg',
          idGenero: 2,
          idAdmin: 1,
          idCliente: 1,
          idHoraFecha: 3,
          idFormatoVideo: 2
         },
         { 
          id: 4, 
          titulo: 'Avengers End Game',
          duracion: '180 min',
          imagen: 'https://www.supercines.com/MovieImages/20190325Mov001/xxhdpi.jpg',
          idGenero: 2,
          idAdmin: 1,
          idCliente: 1,
          idHoraFecha: 4,
          idFormatoVideo: 2
         }
      ]);
    });
};

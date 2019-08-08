exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Administrador', function(table) {
        table.increments('id').primary();
        table.string('nombre', 100).notNullable(); 
        table.string('usuario', 100).notNullable();
        table.string('contrasena', 100).notNullable();
    })
    .createTable('Genero', function(table) {
        table.increments('id').primary();
        table.string('nombre', 100).notNullable();
        table.string('descripcion', 200);
    })  
    .createTable('Cliente', function(table) {
        table.increments('id').primary();
        table.string('cedula', 100);
        table.string('nombre', 100).notNullable();
        table.string('apellido', 100).notNullable();
        table.string('email', 100).notNullable();
        table.string('contraseña', 100).notNullable();
    })
    .createTable('HoraFecha', function(table) {
        table.increments('id');
        table.string('fecha').notNullable();
        table.time('hora').defaultTo(knex.fn.now());
    })
    .createTable('FormatoVideo', function(table) {
        table.increments('id').primary();
        table.string('nombre',100).notNullable();
        table.smallint('precio').notNullable();
    })
    .createTable('Pelicula', function(table) {
        table.increments('id').primary();
        table.string('titulo', 100).notNullable();
        table.string('duracion').notNullable();
        table.string('imagen').notNullable();
        table.integer('idGenero').references('id').inTable('Genero');
        table.integer('idAdmin').references('id').inTable('Administrador');
        table.integer('idCliente').references('id').inTable('Cliente');
        table.integer('idHoraFecha').references('id').inTable('HoraFecha');
        table.integer('idFormatoVideo').references('id').inTable('FormatoVideo');
    })
    .createTable('Sala', function(table) {
        table.increments('id').primary();
        table.smallint('codigo');
        table.string('nombre', 100).notNullable();
        table.integer('idPelicula').references('id').inTable('Pelicula');
    })
    .createTable('Actor', function(table) {
        table.increments('id').primary();
        table.string('nombre', 100).notNullable();
        table.string('apellido', 100).notNullable();
        table.integer('idPelicula').references('id').inTable('Pelicula');
    })
    .createTable('Facturacion', function(table) {
        table.increments('id').primary();
        table.integer('codigo');
        table.integer('idCliente').references('id').inTable('Cliente');
    })
    .createTable('ReservaAsiento', function(table) {
        table.increments('id').primary();
        table.string('estado').notNullable(); 
    })
    .createTable('Asiento', function(table) {
        table.increments('id').primary();
        table.smallint('numero').notNullable();
        table.integer('idSala').references('id').inTable('Sala');
        table.integer('idReservaAsiento').references('id').inTable('ReservaAsiento');
    })
    
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('Pelicula').dropTable('Administrador').dropTable('Cliente')
    .dropTable('Genero').dropTable('Actor').dropTable('Facturacion')
    .dropTable('Sala').dropTable('HoraFecha').dropTable('FormatoVideo')
    .dropTable('Boleto').dropTable('ReservaAsiento').dropTable('Asiento');
};

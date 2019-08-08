var express = require('express');
var cors = require('cors'); 
var bodyParser = require('body-parser');
//Puerto base de datos
var port = process.env.PORT || 8001;
var knex = require('./db/knex');
//Requerir archivos de las tablas
var actor = require('./tablaConect/actor');
var asiento = require('./tablaConect/asiento');
var cliente = require('./tablaConect/cliente');
var facturacion = require('./tablaConect/facturacion');
var formatoVideo = require('./tablaConect/formatoVideo');
var genero = require('./tablaConect/genero');
var horaFecha = require('./tablaConect/horaFecha');
var pelicula = require('./tablaConect/pelicula');
var reservaAsiento = require('./tablaConect/reservaAsiento');
var sala = require('./tablaConect/sala');
//Express
var app = express();
app.use(express.static('public'));
//Body-parser
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//Metodo Http para actor
app.get('/actor', actor.getAll)
app.get('/actor/:id', actor.getOne)
app.post('/actor', actor.addOne)
app.put('/actor/:id', actor.changeOne)
app.delete('/actor/:id', actor.deleteOne)
//Metodo Http para asiento
app.get('/asiento', asiento.getAll)
app.get('/asiento/:id', asiento.getOne)
app.post('/asiento', asiento.addOne)
app.put('/asiento/:id', asiento.changeOne)
app.delete('/asiento/:id', asiento.deleteOne)
//Metodo Http para cliente
app.get('/cliente', cliente.getAll)
app.get('/cliente/:id', cliente.getOne)
app.post('/cliente', cliente.addOne)
app.put('/cliente/:id', cliente.changeOne)
app.delete('/cliente/:id', cliente.deleteOne)
//Metodo Http para facturacion
app.get('/facturacion', facturacion.getAll)
app.get('/facturacion/:id', facturacion.getOne)
app.post('/facturacion', facturacion.addOne)
app.put('/facturacion/:id', facturacion.changeOne)
app.delete('/facturacion/:id', facturacion.deleteOne)
//Metodo Http para formatoVideo
app.get('/formatoVideo', formatoVideo.getAll)
app.get('/formatoVideo/:id', formatoVideo.getOne)
app.post('/formatoVideo', formatoVideo.addOne)
app.put('/formatoVideo/:id', formatoVideo.changeOne)
app.delete('/formatoVideo/:id', formatoVideo.deleteOne)
//Metodo Http para Genero
app.get('/genero', genero.getAll)
app.get('/genero/:id', genero.getOne)
app.post('/genero', genero.addOne)
app.put('/genero/:id', genero.changeOne)
app.delete('/genero/:id', genero.deleteOne)
//Metodo Http para HoraFecha
app.get('/horaFecha', horaFecha.getAll)
app.get('/horaFecha/:id', horaFecha.getOne)
app.get('/horaFecha-pelicula/:id', horaFecha.getJoinPeliculaHoraFecha)
app.post('/horaFecha', horaFecha.addOne)
app.put('/horaFecha/:id', horaFecha.changeOne)
app.delete('/horaFecha/:id', horaFecha.deleteOne)
//Metodo Http para Pelicula
app.get('/pelicula', pelicula.getAll)
app.get('/pelicula/:id', pelicula.getOne)
app.get('/pelicula-precio/:id', pelicula.getJoinPeliculaPrecio)
app.get('/pelicula-horaFecha/:id', pelicula.getJoinPeliculaHoraFecha)
app.post('/pelicula', pelicula.addOne)
app.put('/pelicula/:id', pelicula.changeOne)
app.delete('/pelicula/:id', pelicula.deleteOne)
//Metodo Http para ReservaAsiento
app.get('/reservaAsiento', reservaAsiento.getAll)
app.get('/reservaAsiento/:id', reservaAsiento.getOne)
app.get('/reservaAsiento-pelicula/:id', reservaAsiento.getJoinReservaAsiento)
app.post('/reservaAsiento', reservaAsiento.addOne)
app.put('/reservaAsiento/:id', reservaAsiento.changeOne)
app.delete('/reservaAsiento/:id', reservaAsiento.deleteOne)         
//Metodo Http para Sala
app.get('/sala', sala.getAll)
app.get('/sala/:id', sala.getOne)
app.get('/sala-pelicula/:id', sala.getJoin)
app.post('/sala', sala.addOne)
app.put('/sala/:id', sala.changeOne)
app.delete('/sala/:id', sala.deleteOne)
//Test
app.listen(port, function() {
  console.log("listening on port: ", port);
})
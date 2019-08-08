var knex = require('../db/knex');

module.exports = {
    getAll,
    getOne,
    addOne,
    changeOne,
    deleteOne
};

function getAll(req, res) {
    knex.select()
        .from('Cliente')
        .then((Cliente) => res.send(Cliente));
}

function getOne(req, res) {
    knex.select()
        .from('Cliente')
        .where('id', req.params.id)
        .then((Cliente) => res.send(Cliente));
}

function addOne(req, res) {
    knex('Cliente').insert({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email:req.body.email,
        contraseña: req.body.contrasena
    })
        .then(() => {
            knex.select()
                .from('Cliente')
                .then((Cliente) => res.send(Cliente));
        })
}

function changeOne(req, res) {
    knex('Cliente').update({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contraseña: req.body.contrasena
    })
        .then(() => {
            knex.select()
                .from('Cliente')
                .where('id', req.body.id)
                .then((Cliente) => res.send(Cliente));
        })
}

function deleteOne(req, res) {
    knex('Cliente').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('Cliente')
                .then((Cliente) => res.send(Cliente))
        });
}
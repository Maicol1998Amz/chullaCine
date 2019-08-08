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
        .from('Administrador')
        .then((Administrador) => res.send(Administrador));
}

function getOne(req, res) {
    knex.select()
        .from('Administrador')
        .where('id', req.params.id)
        .then((Administrador) => res.send(Administrador));
}

function addOne(req, res) {
    knex('Administrador').insert({
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            contrasena: req.body.contrasena
        })
        .then(() => {
            knex.select()
                .from('Administrador')
                .then((Administrador) => res.send(Administrador));
        })
}

function changeOne(req, res) {
    knex('Administrador').update({
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            contrasena: req.body.contrasena
        })
        .then(() => {
            knex.select()
                .from('Administrador')
                .where('id', req.body.id)
                .then((Administrador) => res.send(Administrador));
        })
}

function deleteOne(req, res) {
    knex('Administrador').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('Administrador')
                .then((Administrador) => res.send(Administrador))
        });
}
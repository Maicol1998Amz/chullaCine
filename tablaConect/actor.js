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
        .from('Actor')
        .then((Actor) => res.send(Actor));
}

function getOne(req, res) {
    knex.select()
        .from('Actor')
        .where('id', req.params.id)
        .then((Actor) => res.send(Actor));
}

function addOne(req, res) {
    knex('Actor').insert({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        idPelicula: req.body.idPelicula
    })
        .then(() => {
            knex.select()
                .from('Actor')
                .then((Actor) => res.send(Actor));
        })
}

function changeOne(req, res) {
    knex('Actor').update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        idPelicula: req.body.idPelicula
    })
        .then(() => {
            knex.select()
                .from('Actor')
                .where('id', req.body.id)
                .then((Actor) => res.send(Actor));
        })
}

function deleteOne(req, res) {
    knex('Actor').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('Actor')
                .then((Actor) => res.send(Actor))
        });
}
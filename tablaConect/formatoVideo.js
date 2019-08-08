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
        .from('FormatoVideo')
        .then((FormatoVideo) => res.send(FormatoVideo));
}

function getOne(req, res) {
    knex.select()
        .from('FormatoVideo')
        .where('id', req.params.id)
        .then((FormatoVideo) => res.send(FormatoVideo));
}

function addOne(req, res) {
    knex('FormatoVideo').insert({
            nombre: req.body.nombre,
            precio: req.body.precio
        })
        .then(() => {
            knex.select()
                .from('FormatoVideo')
                .then((FormatoVideo) => res.send(FormatoVideo));
        })
}

function changeOne(req, res) {
    knex('FormatoVideo').update({
            nombre: req.body.nombre,
            precio: req.body.precio
        })
        .then(() => {
            knex.select()
                .from('FormatoVideo')
                .where('id', req.body.id)
                .then((FormatoVideo) => res.send(FormatoVideo));
        })
}

function deleteOne(req, res) {
    knex('FormatoVideo').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('FormatoVideo')
                .then((FormatoVideo) => res.send(FormatoVideo))
        });
}
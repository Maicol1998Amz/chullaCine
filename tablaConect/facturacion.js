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
        .from('Facturacion')
        .then((Facturacion) => res.send(Facturacion));
}

function getOne(req, res) {
    knex.select()
        .from('Facturacion')
        .where('id', req.params.id)
        .then((Facturacion) => res.send(Facturacion));
}

function addOne(req, res) {
    knex('Facturacion').insert({
            codigo: req.body.codigo,
            idCliente: req.body.idCliente,
        })
        .then(() => {
            knex.select()
                .from('Facturacion')
                .then((Facturacion) => res.send(Facturacion));
        })
}

function changeOne(req, res) {
    knex('Facturacion').update({
            codigo: req.body.codigo,
            idCliente: req.body.idCliente,
        })
        .then(() => {
            knex.select()
                .from('Facturacion')
                .where('id', req.body.id)
                .then((Facturacion) => res.send(Facturacion));
        })
}

function deleteOne(req, res) {
    knex('Facturacion').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('Facturacion')
                .then((Facturacion) => res.send(Facturacion))
        });
}
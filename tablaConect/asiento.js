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
        .from('Asiento')
        .then((Asiento) => res.send(Asiento));
}

function getOne(req, res) {
    knex.select()
        .from('Asiento')
        .where('id', req.params.id)
        .then((Asiento) => res.send(Asiento));
}

function addOne(req, res) {
    knex('Asiento').insert({
            numero: req.body.numero,
            idSala: req.body.idSala,
            idBoleto: req.body.idBoleto,
            idReservaAsiento: req.body.idReservaAsiento,

        })
        .then(() => {
            knex.select()
                .from('Asiento')
                .then((Asiento) => res.send(Asiento));
        })
}

function changeOne(req, res) {
    knex('Asiento').update({
            numero: req.body.numero,
            idSala: req.body.idSala,
            idBoleto: req.body.idBoleto,
            idReservaAsiento: req.body.idReservaAsiento,

        })
        .then(() => {
            knex.select()
                .from('Asiento')
                .where('id', req.body.id)
                .then((Asiento) => res.send(Asiento));
        })
}

function deleteOne(req, res) {
    knex('Asiento').where('id', req.params.id)
        .del()
        .then(() => {
            knex.select()
                .from('Asiento')
                .then((Asiento) => res.send(Asiento))
        });
}
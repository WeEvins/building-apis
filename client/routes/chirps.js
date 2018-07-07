const express = require('express');
const cors = require('cors');
const chirpStore = require('./chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id

    if(id) {
        res.send(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    // TODO: Handle updating of specified record
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    // TODO: handle delete of specified record
});
module.exports = router;
const express = require('express');
const cors = require('cors');
const chirpStore = require('./chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(req));
    } else {
    res.send(chirpStore.GetChirp());
    }
});
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
}
)
module.exports = router;
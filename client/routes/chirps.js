const express = require('express');
const cors = require('cors');
const chirpStore = require('./chirpstore');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('chirps');
});

module.exports = router;
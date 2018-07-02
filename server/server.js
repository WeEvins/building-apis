const express = require('express');
const cors = require('cors');
const apiRoutes = require('../client/routes/index.js');

let app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);


app.listen(3000);
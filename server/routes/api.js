const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('test 1')
    return res.status(200).sendFile(path.join(__dirname, '../data/data.json'))
} );


module.exports = router;

const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user');

router.get('/getAllUsers', (req, res) => {
    userCtrl.getAll()
    .then((result) => {
        res.send({
            message: 'All users fetched',
            data: result,
        });
    })
    .catch((error) => {
        res.send({
            message: 'Some error occoured',
            error
        });
    });
});

router.post('/addNewUser', (req, res) => {
    userCtrl.add(req.body)
    .then((result) => {
        res.send({
            message: 'New user has been created',
            data: result,
        });
    })
    .catch((error) => {
        console.error(error);
        res.send({
            message: 'Some error occoured',
            error
        });
    });
});

module.exports = router;

const db = require('../models');

const getAll = () => new Promise((resolve, reject) => {
    db.User.findAll()
    .then((users) => {
        resolve(users);
    })
    .catch((error) => {
        reject(error);
    });
});

const add = (userObj) => new Promise((resolve, reject) => {
    db.User.create(userObj)
    .then((users) => {
        resolve(users);
    })
    .catch((error) => {
        reject(error);
    });
});

module.exports = {
    getAll,
    add,
}

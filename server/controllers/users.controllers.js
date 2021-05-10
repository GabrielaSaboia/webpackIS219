const User = require('../models/user.model');

exports.findAll = (req, res) => {//method that returns all users
    User.findAll((err, cities) => {
        if (err) { res.send(err); }
        res.json({ data: cities });
    });
};

exports.create = (req, res) => {
    const newUser = new User(req.body); //new user definition

    // handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        User.create(newUser, (err, user) => {//creation of new user
            if (err) { res.send(err); } //if error -> caught
            res.json({ error: false, message: 'User added successfully!', data: user });
        });
    }
};

exports.findById = (req, res) => {//user search by id method
    User.findById(req.params.id, (err, user) => {
        if (err) { res.send(err); }
        res.json(user);
    });
};

exports.update = (req, res) => {//user record update method definition
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        User.update(req.params.id, new User(req.body), (err) => {
            if (err) { res.send(err); }
            res.json({ error: false, message: 'User successfully updated' });
        });
    }
};

exports.delete = (req, res) => {//user record deletion method
    User.delete(req.params.id, (err) => {
        if (err) { res.send(err); }
        res.json({ error: false, message: 'User successfully deleted' });
    });
};

'use strict';

const express = require('express'),
    router = express.Router(),
    UsersModel = require('../models/usersModel');

router.get('/signup', async (req, res) => {
    res.render('template', {
        locals: {
            title: "Album Review | Signup",
        },
        partials: {
            body: 'partials/signup',
        }
    })
})

router.get('/login', async (req, res) => {
    res.render('template', {
        locals: {
            title: "Album Review | Log In"
        },
        partials: {
            body: "partials/login"
        }
    })
})

router.post('/signup', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    console.log("User Details :", first_name, last_name, email, password);
    const response = await UsersModel.addUser(
        first_name, 
        last_name, 
        email, 
        password
    );
    console.log("RESPONSE IN THE REGISTRATION ROUTE :", response)
    res.sendStatus(200);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("Email and Password :", email, password);
    res.sendStatus(200);
});

module.exports = router;
'use strict';

const express = require('express'),
    router = express.Router();

router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: "Album Review | Signup",
        },
        partials: {
            body: 'partials/signup',
        }
    })
})

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: "Album Review | Log In"
        },
        partials: {
            body: "partials/login"
        }
    })
})

router.post('/signup', (req, res) => {
    const { first_name, last_name, user_email, user_password } = req.body;
});

router.post('/login', (req, res) => {
    const { user_email, user_password } = req.body;
});

module.exports = router;
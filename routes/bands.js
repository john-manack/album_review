'use strict';

const express = require('express'),
    router = express.Router(),
    albumModel = require('../models/albumModel')

router.get('/', async (req, res) => {
    const albumListData = await albumModel.getList();
    console.log("Album List: ", albumListData);
    res.render('template', {
        locals: {
            title: "Album Review | List",
            albumListData,
        },
        partials: {
            body: "partials/album-list",
        }
    });
});

module.exports = router;
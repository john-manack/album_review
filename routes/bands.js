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

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const album = await albumModel.getBySlug(slug);
    const reviews = await albumModel.getAlbumReview(slug);
    console.log("album data :", album);
    console.log("review data :", reviews);

    if (album) {
        res.render('template', {
            locals: {
                title: `${album.album_name}`,
                album,
                reviews
            },
            partials: {
                body: 'partials/album-detail',
            }
        });
    } else {
        res.status(404).send(`No album found that matches slug, ${slug}`)
    }
})

module.exports = router;
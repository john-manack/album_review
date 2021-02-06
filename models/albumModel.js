'use strict';

const db = require('./conn');

class AlbumModel {
    constructor(album_name, band_name, slug) {
        this.album_name = album_name;
        this.band_name = band_name;
        this.slug = slug;
    }

    static async getAll() {
        const response = await db.any(`
            SELECT *
            FROM 
        `)
    }
    
    static async getList() {
        const response = await db.any(`
            SELECT * FROM album;
        `);
        return response;
    }

}

module.exports = AlbumModel;
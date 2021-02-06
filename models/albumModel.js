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
            FROM review
            INNER JOIN album
                ON review.album_reference = album.id
            ORDER BY album.id DESC;
        `)
    }
    
    static async getList() {
        const response = await db.any(`
            SELECT * FROM album;
        `);
        return response;
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(`
                SELECT * FROM album WHERE slug = '${slug}';
            `);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getAlbumReview() {
        const response = await db.any(`
            SELECT *
            FROM review
            INNER JOIN album
                ON review.album_reference = album.id;
        `);
        return response;
    }

}

module.exports = AlbumModel;
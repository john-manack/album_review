'use strict';

const db = require('./conn');

class AlbumModel {
    constructor(album_name, band_name, slug) {
        this.album_name = album_name;
        this.band_name = band_name;
        this.slug = slug;
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

    static async getAlbumReview(slug) {
        try {
            const response = await db.any(`
                SELECT stars, review_message
                FROM review
                INNER JOIN album
                    ON review.album_reference = album.id
                WHERE slug = '${slug}';
            `);
            return response;
        } catch (error) {
            console.error("ERROR :", error);
            return error;
        }
    }

    static async postReview(stars, message, album_reference) {
        try {
            const response = await db.result(`
                INSERT INTO review (stars, review_message, album_reference, user_reference) VALUES ($1, $2, $3, 1);
            `,[stars, message, album_reference]);
            return response;
        } catch (error) {
            console.error("ERROR :", error);
            return error;
        }
    }

}

module.exports = AlbumModel;
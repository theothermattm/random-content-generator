var config = require('../config');
var Chance = require('chance');
var Readable = require('stream').Readable;

/**
 *  Main generate random function
 *  which generates random data based on chance.js
 *  through a chunked stream.
 */
exports.generateRandomStream = function(req, res) {
    var rs;
    var chance;
    var sizeInChars;
    var sizeInKb = req.query.sizeInKb;
    var chunkSize = req.query.chunkSize || 100;
    var numberOfImagesQueryString = req.query.numberOfImages;
    var dontCacheQueryString = req.query.dontCache;
    var dontCache = true;
    var numberOfImages;
    var i;

    if (!sizeInKb || sizeInKb < 1 || sizeInKb > config.max_random_size_kb) {
        res.status('400').send('sizeInKb parameter must be between 1 and ' + config.max_random_size_kb);
        return;
    }

    if (dontCacheQueryString) {
        dontCache = parseInt(dontCacheQueryString);
    }

    numberOfImages = numberOfImagesQueryString ? parseInt(numberOfImagesQueryString) : 0;

    /* this is just an approximation of size for now */
    sizeInChars = sizeInKb * 1024;

    rs = new Readable();
    chance = new Chance();
    var charCounter = 0;
    rs._read = function() {
        if (charCounter === 0) {
            rs.push('<html><head><title>random content</title></head><body>');
        }
        charCounter += chunkSize;
        if (charCounter <= sizeInChars) {
            rs.push(chance.string({
                length: chunkSize
            }));
        } else {
            if (numberOfImages) {

                for (i = 0; i < numberOfImages; i++) {
                    // TODO put different images and
                    // distribute them through payload
                    rs.push('<img src="images/cat.jpg">');
                }

            }
            rs.push('</body></html>')
            rs.push(null);
        }
    }

    if (dontCache) {
        res.set({
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
    }

    rs.pipe(res);

};
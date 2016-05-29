var webshot = require('webshot');
var fs = require('fs-extra');
var moment = require('moment');

function takeShot(url, screensize, delay, userAgents, callback) {
    var directory = 'shots/' + cleanUrl(url, true);
    fs.ensureDirSync('shots');
    fs.ensureDirSync(directory);

    userAgents.forEach(function(element) {
        var options = {
            screenSize: {
                width: screensize.width,
                height: screensize.height
            }, shotSize: {
                width: 'all',
                height: 'all'
            }, userAgent: element.value
        };

        webshot(url, directory + '/' + cleanUrl(url, false) + '_' + element.key + '.png', options, callback);
    });
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function cleanUrl(url, random) {
    return url.replace(/\W/g, '').replace('https', '').replace('http', '') + (random ? ('_' + moment().format("DDMMMYYYY_HHmm") + '_' + getRandomArbitrary(0, 999999999)) : '');
}

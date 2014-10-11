'use strict';

// Import the module
var tenonNode = require('../lib/tenon-node.js');

// Create an instance with your API key
var tenonApi = new tenonNode('YOUR_API_KEY_HERE');


// Examples

// Check a URL
tenonApi.checkUrl('http://www.google.com', function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Tenon.checkUrl', result);
    }
});

// Check an HTML document
tenonApi.checkSrc('<html lang="en"><head><title>Test page</title><head><body><img src="test.jpg"></body></html>', function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Tenon.checkSrc', result);
    }
});

// Check a fragment/block of HTML source
tenonApi.checkFragment('<img src="test.jpg">', function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Tenon.checkFragment', result);
    }
});

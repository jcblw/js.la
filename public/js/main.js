

var $ = window.jQuery = require( 'jquery' ),
    flickr = require( './flickrphotos' ),
    hero = require( './components/hero' ),
    fancyboxOptions = {
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    };

// monkey patch jquery plugins
require( './jquery.fancybox.pack.js' );
require( './jquery.fancybox-media.js' );

$(function() {
    
    hero();
    flickr.addPhotos(); // this starts the script
    $('a[rel=lightbox]').fancybox( fancyboxOptions );

});

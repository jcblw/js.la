

var $ = window.jQuery = require( 'jquery' ),
    merge = require( 'merge' ),
    flickr = require( './flickrphotos' ),
    hero = require( './components/hero' );

// monkey patch jquery plugins
require( './jquery.fancybox.pack.js' );
require( './jquery.fancybox-media.js' );

$(function() {
    var $body = $( 'body' ),
        fancyboxOptions = {
            openEffect  : 'none',
            closeEffect : 'none',
            beforeShow: function(){
                $body.css({ overflowY: 'hidden' })
            },
            afterClose: function(){
                $body.css({ overflowY: 'visible' })
            },
            helpers : {
                media : {}
            }
        };

    
    hero();
    flickr.addPhotos(); // this starts the script
    $( 'a[rel=lightbox-video]' ).fancybox( merge( {}, fancyboxOptions, { 
        showNavArrows: false 
    } ) );
    $('a[rel=lightbox]').fancybox( fancyboxOptions );

});

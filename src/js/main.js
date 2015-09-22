
requirejs.config({
    //enforceDefine: true,
    paths: {
        app: 'app.min',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        modernizr: 'modernizr-custom.min',
        foundation : 'foundation.min',
        foundation_dropdown : 'foundation.dropdown.min',
        responsivenav_simple : 'responsive-simple-nav.min', /* Include this for sliding down not so complex navs */
        responsivenav_multi : 'responsive-multi-nav.min', /* Include this for complex multilevel navs */
        responsivenav_flexnav : 'jquery.flexnav.min', /* Include this for flexnav simple multilevel navs */
        jquery_menu_aim : 'jquery.menu-aim.min', /* Required for responsive multinav */
        backstretch : 'jquery.backstretch.min',
        cookie: 'jquery.cookie.min',
        readmore: 'readmore.min',
        easing : 'jquery.easing.min',
        royalslider : '../../plugins/royalslider/jquery.royalslider.min',
        transit : 'jquery.transit.min',
        waypoints : 'jquery.waypoints.min',
        inview : 'jquery.inview.min',
        lazyloadxt : 'jquery.lazyloadxt.min',
        lazyloadxtvideo : 'jquery.lazyloadxt.extra.min',
        scroll_reveal : 'scrollReveal.min',
        picturefill : 'picturefill.min',
        /* Semantic UI */
        ui_accordion : 'ui/modules/accordion.min',
        ui_dimmer : 'ui/modules/dimmer.min',
        ui_modal : 'ui/modules/modal.min',
        ui_transition : 'ui/modules/transition.min'
    },
    /* Add anything with a dependancy in here */
    shim: {
        jquery : ['modernizr'],
        backstretch : ['jquery'],
        foundation: ['jquery'],
        foundation_dropdown : ['jquery'],
        responsivenav_simple: ['jquery'],
        responsivenav_multi: ['jquery','jquery_menu_aim'],
        responsivenav_flexnav: ['jquery'],
        jquery_menu_aim: ['jquery'],
        cookie: ['jquery'],
        readmore: ['jquery'],
        easing :  ['jquery'],
        royalslider :  ['jquery','easing'],
        transit : ['jquery'],
        waypoints : ['jquery'],
        inview : ['waypoints'],
        lazyloadxt : ['jquery'],
        picturefill : ['jquery'],
        lazyloadxtvideo : ['jquery'],
        ui_dimmer : ['jquery'],
        ui_accordion : ['jquery'],
        ui_transition : ['jquery'],
        ui_modal : ['jquery','ui_dimmer','ui_transition'],
        app: ['jquery',
              'cookie',
              'responsivenav_simple', /* Include this for sliding down not so complex navs */
              'responsivenav_multi', /* Include this for complex multilevel navs */
              'responsivenav_flexnav', /* Include this for flexnav simple multilevel navs */
              'jquery_menu_aim',
              'royalslider',
              'foundation',
              'foundation_dropdown',
              'readmore',
              'easing',
              'transit',
              'waypoints',
              'lazyloadxt',
              'lazyloadxtvideo',
              'scroll_reveal',
              'picturefill',
              'ui_accordion',
              'ui_modal',
              'ui_transition'
        ]
    }
});

//This function is called when the following are loaded.
requirejs(['modernizr','jquery','royalslider','app'], function() {
    
});



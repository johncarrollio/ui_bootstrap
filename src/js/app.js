(function($) {

	/* Simple slide down nav */
	// var nav = responsiveNav('.nav-collapse');

	/* Flexnav **/
	$('.flexnav').flexNav({
	  'animationSpeed':     250,            // default for drop down animation speed
	  'transitionOpacity':  false,           // default for opacity animation
	  'buttonSelector':     '.menu-button', // default menu button class name
	  'hoverIntent':        false,          // Change to true for use with hoverIntent plugin
	  'hoverIntentTimeout': 150,            // hoverIntent default timeout
	  'calcItemWidths':     false,          // dynamically calcs top level nav item widths
	  'hover':              true,            // would you like hover support?     ,
      'subnav': 			false           // enable this for 2 level menu 
	});

	/* Homepage slider */
	$('.royalSlidera').royalSlider({
	    arrowsNav: true,
	    loop: false,
	    usePreloader: true,
	    keyboardNavEnabled: true,
	    controlsInside: true,
	    imageScaleMode: 'fill',
	    arrowsNavAutoHide: false,
	    autoHeight: false,
	    autoScaleSlider: true, 
	    autoScaleSliderWidth: 1400,     
	    autoScaleSliderHeight: 500,
	    controlNavigation: 'none',
	    imageScalePadding: false,
	    slidesSpacing: 0,
	    thumbsFitInViewport: false,
	    navigateByClick: true,
	    startSlideId: 0,
	    autoPlay: true,
	    transitionType:'move',
	    globalCaption: true,
	    numImagesToPreload: 1,
	    deeplinking: {
	      enabled: true,
	      change: false
	    },
	    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
	    imgWidth: 1400//,
	    //imgHeight: 500
	});

	/* Anchor smoothscroll */
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000, 'easeInOutQuint');
	        return false;
	      }
	    }
	});

	// Fix for foundation stylesheets being picked up as "null" or "not an object",
	// implementation from here: http://foundation.zurb.com/forum/posts/3189-foundation-5-orbit-slider-ie8-issue
	if (!Foundation.stylesheet) {
		Foundation._style_element = $('<style></style>').appendTo('head')[0];
		Foundation.stylesheet     = Foundation._style_element.styleSheet;
		
		if (Foundation.stylesheet) {
			Foundation.stylesheet.cssRules = {
				length: 0
			};

			Foundation.stylesheet.insertRule = function(rule, index) {
				var media, mediaMatch, mediaRegex, namespace, ruleMatch, ruleRegex;
				mediaRegex = /^\s*@media\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				mediaMatch = mediaRegex.exec(rule);
				media      = '';

				if (mediaMatch) {
					media = '@media ' + mediaMatch[1] + ' ';
					rule  = mediaMatch[2];
				}

				ruleRegex = /^\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				ruleMatch = ruleRegex.exec(rule);
				namespace = '' + media + ruleMatch[1];
				rule      = ruleMatch[2];

				return this.addRule(namespace, rule);
			};
		} else if (window.console) {
			console.log('Could not fix Foundation CSS rules...');
		}
	}

	requestAnimationFrame(moveBg);

	//$.lazyLoadXT.onload.addClass = 'animated';
	if (!Modernizr.touch) { 
		
	     $(window).scroll(function () {
	         requestAnimationFrame(moveBg);
	     });

	     window.addEventListener('scroll', function() {
		  clearTimeout(timer);
		  if(!body.classList.contains('disable-hover')) {
		    body.classList.add('disable-hover');
		  }
		  
		  timer = setTimeout(function(){
		    body.classList.remove('disable-hover');
		  },300);
		}, false);
	}

	window.sr = new scrollReveal({
          reset: false,
          mobile: false
    });

    var body = document.body,
    timer;

	/* Lazyload XT */
	$.extend($.lazyLoadXT, {
	  edgeY:  200,
	  srcAttr: 'data-src'
	});
	
	var $window = $(window);		//Window object

	// Fix for foundation stylesheets being picked up as "null" or "not an object",
	// implementation from here: http://foundation.zurb.com/forum/posts/3189-foundation-5-orbit-slider-ie8-issue
	if (!Foundation.stylesheet) {
		Foundation._style_element = $('<style></style>').appendTo('head')[0];
		Foundation.stylesheet     = Foundation._style_element.styleSheet;
		
		if (Foundation.stylesheet) {
			Foundation.stylesheet.cssRules = {
				length: 0
			};

			Foundation.stylesheet.insertRule = function(rule, index) {
				var media, mediaMatch, mediaRegex, namespace, ruleMatch, ruleRegex;
				mediaRegex = /^\s*@media\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				mediaMatch = mediaRegex.exec(rule);
				media      = '';

				if (mediaMatch) {
					media = '@media ' + mediaMatch[1] + ' ';
					rule  = mediaMatch[2];
				}

				ruleRegex = /^\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				ruleMatch = ruleRegex.exec(rule);
				namespace = '' + media + ruleMatch[1];
				rule      = ruleMatch[2];

				return this.addRule(namespace, rule);
			};
		} else if (window.console) {
			console.log('Could not fix Foundation CSS rules...');
		}
	}

	/* Lazy load images */
	$.extend($.lazyLoadXT, {
	  edgeY:  0,
	  srcAttr: 'data-src',
	  blankImage: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
	});

	$.lazyLoadXT.onload.addClass = 'animated fadeIn';


})(jQuery);

function moveBg(){
	 if ($(window).width() > 1024) {
		 var scrollTop = document.body.scrollTop;
		 var st = scrollTop / 3;
		 var st_adjust = st;
		 var px = st_adjust+'px';
	 	$('.banner .background').css({'transform':'translate3d(0px, '+px+', 0px)', 'opacity' : 1 - (scrollTop/700) }); 
	 }  
}

$(document).foundation();
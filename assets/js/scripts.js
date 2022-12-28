
/*===================================*
PAGE JS
*===================================*/

(function($) {
	'use strict';
	
	/*===================================*
	01. LOADING JS
	/*===================================*/
	$(window).on('load', function() {
		var preLoder = $(".lds-ellipsis");
		preLoder.delay(700).fadeOut(700);
		setTimeout(function () {
				$(".preloader").delay(700).fadeOut(700).addClass('loaded');
			}, 800);
	});

	/*===================================*
	02. BACKGROUND IMAGE JS
	*===================================*/
	/*data image src*/
	$(".background_bg").each(function() {
		var attr = $(this).attr('data-img-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background-image', 'url(' + attr + ')');
		}
	});
	
	/*===================================*
	03. ANIMATION JS
	*===================================*/
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay,
					opacity: 0
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("opacity", "1");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '90%',
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
	/*===================================*
	04. MENU JS
	*===================================*/
	//Main navigation scroll spy for shadow
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 150) {
	        $('header.fixed-top').addClass('nav-fixed');
	    } else {
	        $('header.fixed-top').removeClass('nav-fixed');
	    }

	});
	
	//Show Hide dropdown-menu Main navigation 
	$( document ).on('ready', function () {
		$( '.dropdown-menu a.dropdown-toggler' ).on( 'click', function () {
			//var $el = $( this );
			//var $parent = $( this ).offsetParent( ".dropdown-menu" );
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function () {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		});
	});
	
	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");

    $.each( navbarLinks, function() {

      var navbarLink = $(this);

        navbarLink.on('click', function () {
          navBar.find(".navbar-collapse").collapse('hide');
		  $("header").removeClass("active");
        });

    });
	
	//Main navigation Active Class Add Remove
	$('.navbar-toggler').on('click', function() {
		$("header").toggleClass("active");
		if($('.search-overlay').hasClass('open'))
		{
			$(".search-overlay").removeClass('open');
			$(".search_trigger").removeClass('open');
		}
	});
	
	
	/*search*/
	$(".close-search").on("click", function() {
		$(".search_wraps,.search_overlay").removeClass('open');
		$("body").removeClass('search_open');
	});
	
	var removeClass = true;
	$(".search_wraps").after('<div class="search_overlay"></div>');
	$(".search_trigger").on('click', function () {
		$(".search_wraps,.search_overlay").toggleClass('open');
		$("body").toggleClass('search_open');
		removeClass = false;
		if($('.navbar-collapse').hasClass('show'))
		{
			$(".navbar-collapse").removeClass('show');
			$(".navbar-toggler").addClass('collapsed');
			$(".navbar-toggler").attr("aria-expanded", false);
		}
	});
	$(".search_wraps form").on('click', function() {
		removeClass = false;
	});
	$("html").on('click', function () {
		if (removeClass) {
			$("body").removeClass('open');
			$(".search_wraps,.search_overlay").removeClass('open');
			$("body").removeClass('search_open');
		}
		removeClass = true;
	});
	
	
	$( document ).on('ready', function() {
		if ($('.header_wrap').hasClass("fixed-top") && !$('.header_wrap').hasClass("transparent_header") && !$('.header_wrap').hasClass("no-sticky")) {
			$(".header_wrap").before('<div class="header_sticky_bar d-none"></div>');
		}
	});
	
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 150) {
	        $('.header_sticky_bar').removeClass('d-none');
			$('header.no-sticky').removeClass('nav-fixed');
			
	    } else {
	        $('.header_sticky_bar').addClass('d-none');
	    }

	});
	
	var setHeight = function() {
		var height_header = $(".header_wrap").height();
		$('.header_sticky_bar').css({'height':height_header});
	};
	
	$(window).on('load', function() {
	  setHeight();
	});
	
	$(window).on('resize', function() {
	  setHeight();
	});
	
	$('.sidetoggle').on('click', function () {
		$(this).addClass('open');
		$('body').addClass('sidetoggle_active');
		$('.sidebar_menu').addClass('active');
		$("body").append('<div id="header-overlay" class="header-overlay"></div>');
	});
	
	$(document).on('click', '#header-overlay, .sidemenu_close',function() {
		$('.sidetoggle').removeClass('open');
		$('body').removeClass('sidetoggle_active');
		$('.sidebar_menu').removeClass('active');
		$('#header-overlay').fadeOut('3000',function(){
			$('#header-overlay').remove();
		});  
		 return false;
	});
	/*===================================*
	05. SMOOTH SCROLLING JS
	*===================================*/
	// Select all links with hashes
	
	
	var topheaderHeight = $(".top-header").innerHeight();
	var mainheaderHeight = $(".header_wrap").innerHeight();
	var headerHeight = mainheaderHeight - topheaderHeight - 20;
    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function() {
		$('a.page-scroll.active').removeClass('active');
		$(this).closest('.page-scroll').addClass('active');
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - headerHeight
            }, speed);
          }
        }
    });
	$(window).on('scroll', function(){
		var lastId,
			// All list items
			menuItems = $(".header_wrap").find("a.page-scroll"),
			topMenuHeight = $(".header_wrap").innerHeight() + 20,
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
			  var items = $($(this).attr("href"));
			  if (items.length) { return items; }
			});
		var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
		var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems.closest('.page-scroll').removeClass("active").end().filter("[href='#"+id+"']").closest('.page-scroll').addClass("active");
	   }  
		
	});
		
	
	/*===================================*
	07. SCROLLUP JS
	*===================================*/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	
	
	/*===================================*
	11. MASONRY JS
	*===================================*/
	$( window ).on( "load", function() {
		var $grid_selectors  = $(".grid_container");
		var filter_selectors = ".grid_filter > li > a";
		if( $grid_selectors.length > 0 ) {
			$grid_selectors.imagesLoaded(function(){
				if ($grid_selectors.hasClass("masonry")){
					$grid_selectors.isotope({
						itemSelector: '.grid_item',
						percentPosition: true,
						layoutMode: "masonry",
						masonry: {
							columnWidth: '.grid-sizer'
						},
					});
				} 
				else {
					$grid_selectors.isotope({
						itemSelector: '.grid_item',
						percentPosition: true,
						layoutMode: "fitRows",
					});
				}
			});
		}
	
		//isotope filter
		$(document).on( "click", filter_selectors, function() {
			$(filter_selectors).removeClass("current");
			$(this).addClass("current");
			var dfselector = $(this).data('filter');
			if ($grid_selectors.hasClass("masonry")){
				$grid_selectors.isotope({
					itemSelector: '.grid_item',
					layoutMode: "masonry",
					masonry: {
						columnWidth: '.grid_item'
					},
					filter: dfselector
				});
			} 
			else {
				$grid_selectors.isotope({
					itemSelector: '.grid_item',
					layoutMode: "fitRows",
					filter: dfselector
				});
			}
			return false;
		});
		
		$('.portfolio_filter').on('change', function() {
			$grid_selectors.isotope({
			  filter: this.value
			});
		});

		$(window).on("resize", function () {
			setTimeout(function () {
				$grid_selectors.find('.grid_item').removeClass('animation').removeClass('animated'); // avoid problem to filter after window resize
				$grid_selectors.isotope('layout');
			}, 300);
		});
	});
	
	$('.link_container').each(function () {
		$(this).magnificPopup({
			delegate: '.image_popup',
			type: 'image',
			mainClass: 'mfp-zoom-in',
			removalDelay: 500,
			gallery: {
				enabled: true
			}
		});
	});
	
	

	/*===================================*
	12. SLIDER JS
	*===================================*/
	function carousel_slider() {
		$('.carousel_slider').each( function() {
			var $carousel = $(this);
			$carousel.owlCarousel({
				dots : $carousel.data("dots"),
				loop : $carousel.data("loop"),
				items: $carousel.data("items"),
				margin: $carousel.data("margin"),
				mouseDrag: $carousel.data("mouse-drag"),
				touchDrag: $carousel.data("touch-drag"),
				autoHeight: $carousel.data("autoheight"),
				center: $carousel.data("center"),
				nav: $carousel.data("nav"),
				rewind: $carousel.data("rewind"),
				navText: ['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>'],
				autoplay : $carousel.data("autoplay"),
				animateIn : $carousel.data("animate-in"),
				animateOut: $carousel.data("animate-out"),
				autoplayTimeout : $carousel.data("autoplay-timeout"),
				smartSpeed: $carousel.data("smart-speed"),
				responsive: $carousel.data("responsive")
			});	
		});
	}
	function slick_slider() {
		$('.slick_slider').each( function() {
			var $slick_carousel = $(this);
			$slick_carousel.slick({
				arrows: $slick_carousel.data("arrows"),
				dots: $slick_carousel.data("dots"),
				infinite: $slick_carousel.data("infinite"),
				centerMode: $slick_carousel.data("center-mode"),
				centerPadding: $slick_carousel.data("center-padding"),
				vertical: $slick_carousel.data("vertical"),
				fade: $slick_carousel.data("fade"),
				cssEase: $slick_carousel.data("css-ease"),
				autoplay: $slick_carousel.data("autoplay"),
				verticalSwiping: $slick_carousel.data("vertical-swiping"),
				autoplaySpeed: $slick_carousel.data("autoplay-speed"),
				speed: $slick_carousel.data("speed"),
				pauseOnHover: $slick_carousel.data("pause-on-hover"),
				draggable: $slick_carousel.data("draggable"),
				slidesToShow: $slick_carousel.data("slides-to-show"),
				slidesToScroll: $slick_carousel.data("slides-to-scroll"),
				asNavFor: $slick_carousel.data("as-nav-for"),
				focusOnSelect: $slick_carousel.data("focus-on-select"),
				responsive: $slick_carousel.data("responsive"),
			});	
		});
	}
	
	
	$(document).on("ready", function() {
		carousel_slider();
		slick_slider();
	});

	
	/*===================================*
	14. POPUP JS
	*===================================*/
	$('.content-popup').magnificPopup({
		type: 'inline',
		preloader: true,
		mainClass: 'mfp-zoom-in',
	});
	
	$('.image_gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled: true,
			},
		});
	});
	
	$('.popup-ajax').magnificPopup({
		type: 'ajax',
		callbacks: {
			ajaxContentAdded: function() {
				carousel_slider();
				slick_slider();
			 }
		}
	});
	
	$('.video_popup, .iframe_popup').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
		mainClass: 'mfp-zoom-in',
		preloader: false,
		fixedContentPos: false
	});
	
	/*===================================*
	15. Select dropdowns
	*===================================*/
	
	if ($('select').length) {
	// Traverse through all dropdowns
	$.each($('select'), function (i, val) {
		var $el = $(val);
		
		if ($el.val()===""){ 
			$el.addClass('first_null'); 
		}
		
		if (!$el.val()) {
			$el.addClass('not_chosen');
		}
		
		$el.on('change', function () {
			if (!$el.val())
				$el.addClass('not_chosen');
			else
				$el.removeClass('not_chosen');
		});
		
	  });
	}

		

	/*==============================================================
    31. DROPDOWN JS
    ==============================================================*/
	if ($(".custome_select").length > 0){
		$(document).on('ready', function() {
			$(".custome_select").msDropdown();
		});
	}
	if ($("#lng_select,#doc_select").length > 0){
		$(document).on('ready', function() {
			$("#lng_select,#doc_select").msDropdown();
		});
	}
	
	/*===================================*
	33. ONLOAD POPUP JS
	*===================================*/
	
	$(window).on('load',function(){
		setTimeout(function() {
			$("#onload-popup").modal('show', {}, 500);
		}, 3000);
		
	});
	
	
	
	
	
	
	
})(jQuery);



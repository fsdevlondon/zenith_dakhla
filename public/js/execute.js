
// Hotel runner
var url_was;
var hr = {
	key: '74aa87a8b5b2cd511fe8',
	widget_type: 'booknow',
	search_path: 'search',
	host: 'zenith-dakhla.hotelrunner.com',
	asset_host: location.protocol + '//app.hotelrunner.com',
	background_color: '#ba732c',
	text_color: '#ffffff',
	text: 'Book Now',
	align: 'Top',
	valign: 'Right',
	locale: 'en-US',
	current_url: 'zenith-dakhla.hotelrunner.com',
	widget_version: 2
};
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
window.HotelRunnerLib = {
	compare_versions: function (a, b) {
		// Return 1 if a > b
		// Return -1 if a < b
		// Return 0 if a == b
		if (a === b) {
			return 0;
		}

		var a_components = a.split(".");
		var b_components = b.split(".");

		var len = Math.min(a_components.length, b_components.length);

		// loop while the components are equal
		for (var i = 0; i < len; i++) {
			// A bigger than B
			if (parseInt(a_components[i]) > parseInt(b_components[i])) {
				return 1;
			}

			// B bigger than A
			if (parseInt(a_components[i]) < parseInt(b_components[i])) {
				return -1;
			}
		}

		// If one's a prefix of the other, the longer one is greater.
		if (a_components.length > b_components.length) {
			return 1;
		}

		if (a_components.length < b_components.length) {
			return -1;
		}

		// Otherwise they are the same.
		return 0;
	},
	loadScript: function (url, callback) {

		var script = document.createElement("script")
		script.type = "text/javascript";

		if (script.readyState) { //IE
			script.onreadystatechange = function () {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else { //Others
			script.onload = function () {
				callback();
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
};
var initialize_hr_widget = function () {
	if (window.hr_widget_initialized) {
		return true;
	}
	if (typeof(jQuery) == "undefined" || ((HotelRunnerLib.compare_versions('1.7.2', jQuery.fn.jquery) == '1') && (typeof(hjq) == 'undefined'))) {
		no_jquery = (typeof(jQuery) == "undefined")
		if (!no_jquery) {
			old_jquery = jQuery;
		}
		HotelRunnerLib.loadScript(hr['asset_host'] + "/assets/jquery.js", function () {
			hjq = jQuery.noConflict();
			if (!no_jquery) {
				jQuery = old_jquery;
			}
			initialize_hr_widget();
		});
	} else {
		window.hr_widget_initialized = true;
		if (typeof(hjq) == 'undefined') {
			if (typeof(jQuery.noConflict) == "function") {
				hjq = jQuery.noConflict();
			} else {
				hjq = $;
			}
		}

		(function ($) {
			open_with_popup = function (url) {
				var link = form = document.createElement("a");
				link.style.display = "none";
				link.href = url + "&popup=1";
				link.target = '_blank';
				link.click();
			};

			$(document).ready(function () {


				var hr_prepared = false;
				var hr_frame_overlay = document.createElement("div");
				var hr_frame_container = document.createElement("div");

				var hr_meta = document.createElement('meta');
				hr_meta.id = 'hr_meta_tag'
				hr_meta.setAttribute('name', 'viewport');
				hr_meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height');

				if (typeof(window.HotelRunnerWidget == "undefined")) {
					window.HotelRunnerWidget = {
						prepare: function (custom_url) {
							if (hr_prepared && custom_url == url_was) return;
							url_was = custom_url;
							$("#hr_frame, #hr_frame_overlay, #hr_frame_container").remove();
							hr_prepared = true;
							hr_frame_overlay.id = 'hr_frame_overlay';
							hr_frame_overlay.className = 'hr_' + hr.search_path + '_overlay';
							document.body.appendChild(hr_frame_overlay);
							hr_frame_container.id = 'hr_frame_container';
							hr_frame_container.className = 'hr_' + hr.search_path + '_container';
							hr_frame_container.innerHTML = '<iframe id="hr_frame" frameborder="0" style="width: 100%; height: 100%;"  allowtransparency="true" src="' + (custom_url || search_url) + '"></iframe>';
							document.body.appendChild(hr_frame_container);

						},

						show: function (custom_url) {
							if (isMobile.iOS()) {
								open_with_popup(search_base_url);
							} else {
								if (!hr_prepared || (custom_url != url_was)) {
									HotelRunnerWidget.prepare(custom_url);
								}
								toggle_hr_viewport(true);
								HotelRunnerWidget.set_dimensions();
								hr_frame_overlay.style.display = "block";
								hr_frame_container.style.display = "block"

								if (isMobile.Android()) {
									$('#hr_frame').addClass('browser');
								}

							}
						},
						set_dimensions: function () {
							var A = (typeof(window.innerWidth) !== "undefined" ? window.innerWidth : document.documentElement.clientWidth) || document.body.clientWidth,
								B = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
								height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
									document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
								y = (A - 507) / 2,
								z = document.getElementById("hr_frame_container"),
								frame = document.getElementById("hr_frame");

//                B = 50;
//                z.style.top = (B + 10) + "px";
//                z.style.left = Math.max(0, y) + "px"
							hr_frame_overlay.style.height = '100vh';
							frame.style.width = "100%";
							frame.style.height = '100vh';
						}
					}
				}


				if (typeof(window.booknow_button_id) == "undefined") {

					var id = "booknow-hr-" + hr.align + hr.valign;

					var hr_class = "booknowwidget booknowwidget-" + hr.align + " booknowwidget-" + hr.align + hr.valign;

					var search_url = 'https://' + hr.host + "/widgets/" + hr.key + "/iframe/true?w=true&opener=" + document.location.host;
					var search_base_url = 'https://' + hr.host + "/bv2/search?opener=" + document.location.host;

					wrapper = $("<div onclick='HotelRunnerWidget.show(null);' id=\"" + id + "\"></div>");

					if (hr.widget_type == 'booknow') {
						if (hr.widget_version == 2) {
							inner = $("<div id='cm_preview_button_free_text' style=\"background-color:" + hr.background_color + ";color:" + hr.text_color + "\" class=\"" + hr_class + "\">" +
								"<p>" + hr.text + "</p>");
						} else {
							var hr_image;

							if (hr.align == "Left" || hr.align == "Right") {
								hr_image = hr.text + "-side-" + hr.locale + ".png";
							} else {
								hr_image = hr.text + "-topbottom-" + hr.locale + ".png";
							}
							inner = $("<div id='cm_preview_button' style=\"background-color:" + hr.background_color + "\" class=\"" + hr_class + "\">" +
								"<img src=\"" + hr.asset_host + "/assets/button/" + hr_image + "\" alt=\"" + hr.text + "\" />");
						}

						wrapper.append(inner);
						if (hr.align == 'Free') {
							$('#hr_widget_script').after(wrapper);
						} else {
							$(document.body).append(wrapper);
						}
					}
				} else {
					var id = window.booknow_button_id;
					var search_url = window.booknow_button_url;
					var search_base_url = window.booknow_button_base_url;
					wrapper = $("#" + id);
				}

				$('#' + id).hover(function () {
					HotelRunnerWidget.prepare(null);
				});


				handle_click = function (e) {
					e.preventDefault();
					HotelRunnerWidget.show(null);
				}

				if (document.getElementById(id) != null)
					document.getElementById(id).addEventListener("click", handle_click, false);

				var elements = document.getElementsByClassName('initialize_hr_widget');
				for (var i = 0, j = elements.length; i < j; i++) {
					elements[i].addEventListener("click", handle_click, false);
				}


				$(window).resize(function () {
				});



				toggle_hr_viewport = function (enable) {
					if (enable) {
						document.head.appendChild(hr_meta);
						document.body.scrollTop = 0;
						$('html, body').animate({scrollTop: 0}, 0);
					} else {
						document.head.removeChild(hr_meta);
						old_meta = $('meta[name=viewport]').clone();
						$('meta[name=viewport]').remove();
						$('head').append(old_meta);
					}
				};

				closeFrame = function (event) {
					if (event.data == "hr_close_frame") {
						hr_frame_overlay.style.display = "none";
						hr_frame_container.style.display = "none"
						toggle_hr_viewport(false);
					}
				};

				// For IE-8 compatibility -> attachevent
				var addEvent = window.attachEvent || window.addEventListener;
				var event = window.attachEvent ? 'onmessage' : 'message';
				addEvent(event, closeFrame, false);

				setTimeout(function () {
					HotelRunnerWidget.prepare(null);
					hr_widget_after_initialize();
				}, 1000);

			});

		})(hjq);
	}
}
var hr_widget_after_initialize = function () {
	if (hr.widget_type == 'boxed' || hr.widget_type == 'row') {
		document.getElementById('hr_widget_script').after(document.getElementById('hr_frame_container'));
	}
}
//window.addEventListener("load", initialize_hr_widget());
/*if (window.loaded && !window.hr_widget_initialized) {
	initialize_hr_widget();
}*/

$.fn.isOnScreen = function(){
	var win = $(window);
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

(document).ready(function() {
	try {
		var parent = document.getElementsByClassName('nav-slider__menu');
		var child = document.getElementsByClassName('nav-slider__menu-wrap');
		child[0].style.paddingRight = child[0].offsetWidth - child[0].clientWidth + "px";
		pressLogoDisplay();
	} catch(err) {
		
	}

	if ( $(window).width() >=768 ) {
		docReady_winResize_functions();
	} else {
		docReady_winResize_functions_mobile();
	}

	$('.nav-reserve, .slide-booking-widget').mouseover(function() {
		if ($(window).width() >= 768) {
			$('body').addClass('slide-booking-active');
		}
	}).mouseout(function() {
		if ($(window).width() >= 768) {
			$('body').removeClass('slide-booking-active');
		}
	});

	$('.slide-booking-widget').click(function(e) {
		var mobile_booking = $('.slide-booking-widget__wrap');
			if ($(window).width() < 768) {
				if ( !mobile_booking.is(e.target) && mobile_booking.has(e.target).length === 0 ) {
					$('body').removeClass('slide-booking-active');
					console.log('hello');
				}
			}
	});

	$('.slide-booking-widget__close').on('click', function() {
		$('body').removeClass('slide-booking-active');
	});

	// Animsition
	$('.animsition').animsition();

	$('.footer__copyright').on('mouseenter', function() {
		$('.footer__copyright--original').removeClass('active');
		$('.footer__copyright--hover').addClass('active');
	});

	$('.footer__copyright').on('mouseleave', function() {
		$('.footer__copyright--original').addClass('active');
		$('.footer__copyright--hover').removeClass('active');
	});

	// On Resize

	$(window).resize(function() {
		if ($(window).width() >=768) {
			docReady_winResize_functions();
		} else {
			docReady_winResize_functions_mobile();
		}
		flexim_slider();
		step_images();
	});

	$('.nav-reserve').on('click', function() {
		if ($('body').hasClass('slide-booking-active')) {
			$('body').removeClass('slide-booking-active');
		} else {
			$('body').addClass('slide-booking-active');
		}
	});

	step_images();

	bindDragScroll($('.flexim-slider'), $('.flexim-slider__boxxy'));

	$('.nav-slider__menu-container li a').mouseenter(function() {

		$('.nav-slider__image--' + $(this).data('id') ).addClass('active');
		$('.nav-slider__image--default' ).removeClass('active');

	}).mouseleave(function() {

		$('.nav-slider__image--' + $(this).data('id') ).removeClass('active');
		$('.nav-slider__image--default' ).addClass('active');

	});

	$('.fadein-slideready').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('fadein-slideup');
		}
	});

	$('.banner-carousel-js').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
		responsive: {
			0: {
				nav: true,
				dots: false
			},
			768: {
				nav: true,
				dots: true
			}
		}
	});

	$('.category-gallery-carousel-js, .tripadvisor-js').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
	});

	$('.flexim-slider--mobile .flexim-slider__container-js').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false
	});

	$('.brand-hotel-guide__slider-js').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					centerMode: true,
					centerPadding: '20%',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '10%',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
	// Swiper

	var brandImageSwiper = new Swiper('.brand-image-swiper-js', {
		slidesPerView: 'auto',
		freeMode: true,
		navigation: {
			nextEl: '.brand-image-swiper__next',
			prevEl: '.brand-image-swiper__prev',
		},
		breakpoints: {
			767: {
				centeredSlides: true,
				initialSlide: 1,
			},
			768: {
			}
		}
	});

	$('.custom-select__text').click(function() {
		var custom_select = $(this).closest('.custom-select');
		var custom_select_options = custom_select.find('.custom-select__options');
		if ( !custom_select.hasClass('active') ) {
			custom_select.addClass('active');
			custom_select_options.slideDown(400);
		} else {
			custom_select.removeClass('active');
			custom_select_options.slideUp(400);
		}
	});

	$('.custom-select__option').click(function() {
		var custom_select = $(this).closest('.custom-select');
		var custom_select_options = $(this).closest('.custom-select__options');
		var custom_select_input = custom_select.find('input');
		var custom_select_text = custom_select.find('.custom-select__text div');
		var custom_select_option = custom_select.find('.custom-select__option');
		var custom_select_option_value = $(this).attr('data-value');
		var custom_select_option_text = $(this).text();

		custom_select_option.removeClass('active');
		$(this).addClass('active');

		custom_select.removeClass('active');
		custom_select_options.slideUp(400);
		custom_select_input.val(custom_select_option_value);
		custom_select_text.text(custom_select_option_text);
	});

	var $twinSliderNavPrev = $(".twin-slider__nav-prev");
	var $twinSliderNavNext = $(".twin-slider__nav-next");
	var $twinSliderCaption = $(".twin-slider__captions");

	function twinSliderCaption(direction) {

		if( direction == 'prev' ) {
			$prevTwinSliderCaption = $twinSliderCaption.find('.twin-slider__caption--active').prev();
			if( $prevTwinSliderCaption.length ) {
				$twinSliderCaption.find('.twin-slider__caption').removeClass('twin-slider__caption--active');
				$prevTwinSliderCaption.addClass('twin-slider__caption--active');
			}
		} else {
			$nextTwinSliderCaption = $twinSliderCaption.find('.twin-slider__caption--active').next();
			if( $nextTwinSliderCaption.length ) {
				$twinSliderCaption.find('.twin-slider__caption').removeClass('twin-slider__caption--active');
				$nextTwinSliderCaption.addClass('twin-slider__caption--active');
			}
		}
	}

	var $twinSliderLeft = $('.twin-slider-left-js').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		mouseDrag: true,
		smartSpeed: 1500,
		autoplay:true,
		autoplayTimeout:3500,
		responsive: {
			0 : {
				mouseDrag: false,
			},
			768 : {
				mouseDrag: false,
			}
		}
	}).on("dragged.owl.carousel", function (event) {
		if (event.relatedTarget._drag.direction === "left") {
			setTimeout( function() {
				$twinSliderRight.trigger('next.owl.carousel');
			}, 100);
		} else if(event.relatedTarget._drag.direction === "right") {
			$twinSliderRight.trigger('prev.owl.carousel');
		}
	}).on("click", function() {
		$twinSliderLeft.trigger('prev.owl.carousel');
		$twinSliderRight.trigger('prev.owl.carousel');
	});

	var $twinSliderRight = $('.twin-slider-right-js').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		mouseDrag: true,
		smartSpeed: 1500,
		autoplay:true,
		autoplayTimeout:3500,
		onChanged: function (event) {
			var items     = event.item.count;     // Number of items
			var item      = ( event.item.index ) + 1;     // Position of the current item
			// Reset the class on navigation
			$twinSliderNavPrev.removeClass('disabled');
			$twinSliderNavNext.removeClass('disabled');
			// disable prev if currently on the first item
			if( item == 1 ) {
				$twinSliderNavPrev.addClass('disabled');
			}
			// disable prev if currently on the last item
			if( items == item ) {
				$twinSliderNavNext.addClass('disabled');
			}
		}
	}).on("dragged.owl.carousel", function (event) {
		if (event.relatedTarget._drag.direction === "left") {
			$twinSliderLeft.trigger('next.owl.carousel');
		} else if(event.relatedTarget._drag.direction === "right") {
			setTimeout( function() {
				$twinSliderLeft.trigger('prev.owl.carousel');
			}, 100)
		}
	}).on("click", function() {
		$twinSliderLeft.trigger('next.owl.carousel');
		$twinSliderRight.trigger('next.owl.carousel');
	});


	var $photoContentDoubleSliderNavPrev = $(".photo-content-double-slider__nav-prev");
	var $photoContentDoubleSliderNavNext = $(".photo-content-double-slider__nav-next");
	var $photoContentDoubleSlider = $('.photo-content-double-slider-js').owlCarousel({
		dots: false,
		items: 1,
		mouseDrag: true,
		touchDrag: true,
		smartSpeed: 1500,
		onChanged: function (event) {
			var items     = event.item.count;     // Number of items
			var item      = ( event.item.index ) + 1;     // Position of the current item
			// Reset the class on navigation
			$photoContentDoubleSliderNavPrev.removeClass('disabled');
			$photoContentDoubleSliderNavNext.removeClass('disabled');
			// disable prev if currently on the first item
			if( item == 1 ) {
				$photoContentDoubleSliderNavPrev.addClass('disabled');
			}
			// disable prev if currently on the last item
			if( items == item ) {
				$photoContentDoubleSliderNavNext.addClass('disabled');
			}
		}
	});

	$('.two-image-slider-carousel-js').owlCarousel({
		items: 2,
		stagePadding: 100,
		margin: 50,
		loop: true,
		responsiveClass:true,
		responsive:{
			0:{
				items: 1,
				stagePadding: 25,
				margin: 13,
			},
			768:{
				items: 1,
				stagePadding: 100,
				margin: 50
			},
			960:{
				items: 2,
				stagePadding: 100,
				margin: 50
			}
		}
	});

	// Custom Navigation Events
	$twinSliderNavPrev.on('click', function() {
		$twinSliderRight.trigger('prev.owl.carousel');
		setTimeout( function() {
			$twinSliderLeft.trigger('prev.owl.carousel');
		}, 100);
	});

	$twinSliderNavNext.on('click', function() {
		$twinSliderLeft.trigger('next.owl.carousel');
		setTimeout( function() {
			$twinSliderRight.trigger('next.owl.carousel');
		}, 100);
	});

	$twinSliderLeft.on("prev.owl.carousel", function(event) {
		twinSliderCaption("prev");
	}).on("next.owl.carousel", function(event) {
		twinSliderCaption("next");
	}).on("dragged.owl.carousel", function (event) {
		if (event.relatedTarget._drag.direction === "left") {
			twinSliderCaption("next");
		} else if(event.relatedTarget._drag.direction === "right") {
			twinSliderCaption("prev");
		}
	});

	$photoContentDoubleSliderNavPrev.on('click', function() {
		$photoContentDoubleSlider.trigger('prev.owl.carousel');
	});
	$photoContentDoubleSliderNavNext.on('click', function() {
		$photoContentDoubleSlider.trigger('next.owl.carousel');
	});

	try{
		$('.twin-slider__numbers').click(function(){
			var scroll = $('.twin-slider__numbers').parent().offset().top + $('.twin-slider__numbers').parent().outerHeight();
			$('html,body').animate({scrollTop: (scroll)}, 500, function() {});
		});
	} catch(error) {
	}
	// Smooth Scroll
	var scroll = new SmoothScroll('[data-scroll]', {
		speed: 1000,
		easing: 'easeInOutQuad'
	});
	// Neighborhood Banner Filter
	$category_text = $('.banner__category-container .banner__category-item').first().text();
	$category_slug = $('.banner__category-container .banner__category-item').first().attr('data-category');
	$person_text = $('.banner__person-container .banner__category-item').first().text();
	$person_slug = $('.banner__person-container .banner__category-item').first().attr('data-category');
	$('.banner__category-container .banner__category-label').text($category_text);
	$('.banner__category-container .banner__category-label').attr('data-category', $category_slug);
	$('.banner__person-container .banner__category-label').text($person_text);
	$('.banner__person-container .banner__category-label').attr('data-category', $person_slug);
	$('.banner__category-select').on('click', function() {
		$this_select = $(this).parent().find('.banner__category-group').hasClass('active');
		$('.banner__category-group').removeClass('active');
		if (!$this_select)
			$(this).parent().find('.banner__category-group').addClass('active');
	});

	$('.banner__category-item').on('click', function() {
		$text = $(this).text();
		$category = $(this).attr('data-category');
		$(this).parent().parent().find('.banner__category-label').attr('data-category', $category);
		$(this).parent().parent().find('.banner__category-label').text($text);
		$('.banner__category-group').removeClass('active');
		$neighborhood_category = $('.neighborhood_category').val();
		$category_slug = $('.banner__category-container .banner__category-label').attr('data-category');
		$person_slug = $('.banner__person-container .banner__category-label').attr('data-category');

		$.ajax({
			url: ajax_url,
			type: 'post',
			data: {
				action: 'ajax_locations',
				neighborhood_category: $neighborhood_category,
				category_slug: $category_slug,
				person_slug: $person_slug
			},
			success: function(data){
				$('.neighborhood__location .layout-container').html(data);
				$count = $('.neighborhood__location-item').attr('data-count');
				$('.banner__button span').text($count);
			},
			error: function(data){
			}
		});
	});

	$('body').on('click', function(e) {
		$target = $(e.target);
		if ( (!$target.closest('.banner__category-select').length && !$target.closest('.banner__category-group').length) ) {
			$('.banner__category-group').removeClass('active');
		}
	});

	$('body').on('click', '.neighborhood__button .btn', function() {
		$('html').animate({ scrollTop: 0 }, 1000, 'easeInOutQuad');
		return false;
	});

	// Functions
	function monthNames(i) {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return months[i];
	}

	// Variables
	if ($('html').attr('lang') == 'es-ES') {
		$.datepicker.setDefaults( $.datepicker.regional[ "es" ] );
		var week = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
		var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	} else {
		var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	}

	// Variables
	var dateFormat_default = 'mm/dd/yy';
	var dateFormat_formBooking = 'mm/dd/yy';

	var date_today = new Date(),
		date_tomorrow = new Date();
		date_tomorrow.setDate( date_tomorrow.getDate() + 1 );
	// Get Today Text
	var date_today_text = $.datepicker.formatDate(dateFormat_formBooking, date_today);
	// Get Tomorrow Text
	var date_tomorrow_text = $.datepicker.formatDate(dateFormat_formBooking, date_tomorrow);
	// Format Date
	var date_today_formatDate = $.datepicker.formatDate(dateFormat_default, date_today);
	var date_tomorrow_formatDate = $.datepicker.formatDate(dateFormat_default, date_tomorrow);
	// Add Date to Value Attr in respective Input
	$('#reserve_arrive').val(date_today_formatDate);
	$('#reserve_depart').val(date_tomorrow_formatDate);

	// Variables
	var reserve_dp_formy_row = $('.reserve-popup .formy__row--datepicker-rp');
	var reserve_dp_datepicker_reserve = $('.formy__datepicker-reserve--datepicker');
	var reserve_dp_reserve_arrive = $('.formy__datepicker--reserve-arrive');
	var reserve_dp_reserve_depart = $('.formy__datepicker--reserve-depart');
	var reserve_dp_text_arrive = $('.formy__datepicker--reserve-arrive .formy__datepicker-text div');
	var reserve_dp_text_depart = $('.formy__datepicker--reserve-depart .formy__datepicker-text div');

	// Reserve Popup - Desktop
	$('.nav-reserve--desktop span, .reserve-popup--desktop')
	.mouseover(function() {
		$('body').removeClass('overflow-hidden');
		$('.reserve-popup--mobile').removeClass('active');
		if (!$('.reserve-popup--desktop').hasClass('reserve-popup--active')) {
			$('.reserve-popup--desktop').addClass('reserve-popup--active');
		}
	})
	.mouseout(function() {
		$('.reserve-popup--desktop').removeClass('reserve-popup--active');
	});
	$('.nav-reserve--mobile span').click(function() {
			$('body').addClass('overflow-hidden');
			$('.reserve-popup--mobile').addClass('active');
	});

	// Reserve Popup - Mobile
	$('.reserve-popup__close').click(function() {
		$('body').removeClass('overflow-hidden');
		$('.reserve-popup--mobile').removeClass('active');
	});
	$('.formy__datepicker-reserve-close').click(function() {
		reserve_dp_datepicker_reserve.removeClass('arrive depart first');
		reserve_dp_formy_row.slideUp(400);
	});

	// If Datepicker Input Click
	$('.formy__datepicker--reserve-arrive, .formy__datepicker--reserve-depart').click(function() {
		var rp_this = $(this);
		// Set Active Class
		if ( !rp_this.hasClass('active') ) {
			$('.reserve-popup .formy__datepicker').removeClass('active'); // Reset
			rp_this.addClass('active');
		}
		// Set Arrive/Depart Class
		reserve_dp_datepicker_reserve.removeClass('arrive depart'); // Reset
		reserve_dp_formy_row.slideDown(400);
		if ( rp_this.hasClass('formy__datepicker--reserve-arrive') ) {
			reserve_dp_datepicker_reserve.addClass('arrive');
		} else {
			reserve_dp_datepicker_reserve.addClass('depart');
		}
	});

	// Initialize the Booking Values
	$.each($('.reserve-popup__filter-select .reserve-popup__select'), function( key, value ) {
		selected = $(value).find('.selected');
		$('#'+$(value).data('type')).val( selected.val() );
		$(value).siblings('.reserve-popup__filter-selected').text( selected.text() );
	});

	// Booking Select on Change
	$('.reserve-popup__filter-select .reserve-popup__select').on('change', function() {
		selected = $(this).find('.selected');
		$('#'+$(this).data('type')).val( selected.val() );
		$(this).siblings('.reserve-popup__filter-selected').text( selected.text() );
	});

	$('.reserve-popup__filter-select').click(function() {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().find('.reserve-popup__select').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().find('.reserve-popup__select').slideDown();
			$(this).parent().addClass('active');
		}
	});

	$('.reserve-popup-select__items').click(function() {
		var val = $(this).text();
		var id = $(this).parent().data('type');
		$(this).removeClass('selected');
		$(this).addClass('selected');
		$('#adult').val($(this).data('val'));
		$(this).parent().prev().text(val);
		$('#'+ id).val($(this).data('val'));
	});

	$('.formy__select-text').on('click', function(e) {
		e.stopPropagation();
		var formy_select = $(this).parent().parent();
		var formy_select_options = formy_select.find('.formy__select-options');
		if ( !formy_select.hasClass('active') ) {
			formy_select.addClass('active');
			formy_select_options.slideDown(400);
		} else {
			formy_select.removeClass('active');
			formy_select_options.slideUp(400);
		}
	});

	$('body').on('click', function() {
		var formy_select = $('.formy__select-text').parent().parent();

		$(formy_select).each(function(){
			var domSelect = jQuery(this);
			var formy_select_options = domSelect.find('.formy__select-options');
			if ( domSelect.hasClass('active') ) {
				domSelect.removeClass('active');
				formy_select_options.slideUp(400);
			}
		});
		
	});

	$('.formy__select-option').on('click', function() {
		var formy_select = $(this).parent().parent().parent();
		var formy_select_options = $(this).parent();
		var formy_select_input = formy_select.find('input');
		var formy_select_text = formy_select.find('.formy__select-text div');
		var formy_select_option = formy_select.find('.formy__select-option');
		var formy_select_option_value = $(this).attr('data-value');
		var formy_select_option_text = $(this).text();

		formy_select_option.removeClass('active');
		$(this).addClass('active');

		formy_select.removeClass('active');
		formy_select_options.slideUp(400);
		formy_select_input.val(formy_select_option_value);
		formy_select_text.text(formy_select_option_text);
	});

	// Banner Datepicker - Inline
	$('.brand-banner__bookbar form').submit(function(e) {
		if ( $('.brand-banner__bookbar-field--select select :selected').text() == 'Location' ) {
			e.preventDefault();
			window.location = 'https://be.synxis.com/?adult=1&arrive=&chain=24140&child=0&depart=&level=hotel&locale=en-US&rooms=1&sbe_ri=0';
		}
	});

	$('#banner_inline_reserve_arrive_text.formy__datepicker--banner-inline').datepicker({
		dateFormat: 'mm/dd/yy',
		dayNamesMin: week,
		monthNames: months,
		showOtherMonths: true,
		firstDay: 0, // Sunday
		minDate: 0,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_depart').val());
			if (date1 && (date.getTime() == date1.getTime())) {
				className = 'arrival-date';
			}
			else if (date2 && (date.getTime() == date2.getTime())) {
				className = 'departure-date';
			}
			else if ((date1 && date2) && (date1 < date && date < date2)) {
				className = 'between-date';
			}
			else {
				className = '';
			}
			return [true, className];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_depart').val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			if (!date1 || date2) {
				$('#banner_inline_reserve_arrive').val(dateText);
				$('#banner_inline_reserve_depart').val("");
				$('#banner_inline_reserve_arrive_text').val(dateText);
				$('#banner_inline_reserve_depart_text').val("");
				$(this).datepicker();

			} else if ( selectedDate < date1 ) {
				$('#banner_inline_reserve_depart').val($('#banner_inline_reserve_arrive').val());
				$('#banner_inline_reserve_arrive').val(dateText);
				$('#banner_inline_reserve_depart_text').val($('#banner_inline_reserve_arrive_text').val());
				$('#banner_inline_reserve_arrive_text').val(dateText);
				$(this).datepicker();

			} else {
				$("#banner_inline_reserve_depart").val(dateText);
				$('#banner_inline_reserve_depart_text').val(dateText);
				$(this).datepicker();
			}

			$( "#banner_inline_reserve_depart_text.formy__datepicker--banner-inline" ).datepicker("option", "minDate", selectedDate );
			setTimeout(function(){
				$( "#banner_inline_reserve_depart_text.formy__datepicker--banner-inline" ).datepicker('show');
			}, 16);
		}
	});
	$('#banner_inline_reserve_depart_text.formy__datepicker--banner-inline').datepicker({
		dateFormat: 'mm/dd/yy',
		dayNamesMin: week,
		monthNames: months,
		showOtherMonths: true,
		firstDay: 0, // Sunday
		minDate: 0,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_depart').val());

			if (date1 && (date.getTime() == date1.getTime())) {
				className = 'arrival-date';
			}
			else if (date2 && (date.getTime() == date2.getTime())) {
				className = 'departure-date';
			}
			else if ((date1 && date2) && (date1 < date && date < date2)) {
				className = 'between-date';
			}
			else {
				className = '';
			}
			return [true, className];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#banner_inline_reserve_depart').val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			if (!date1 || date2) {
				$('#banner_inline_reserve_arrive').val(dateText);
				$('#banner_inline_reserve_depart').val("");
				$('#banner_inline_reserve_arrive_text').val(dateText);
				$('#banner_inline_reserve_depart_text').val("");
				$(this).datepicker();

			} else if ( selectedDate < date1 ) {

				$('#banner_inline_reserve_depart').val($('#banner_inline_reserve_arrive').val());
				$('#banner_inline_reserve_arrive').val(dateText);
				$('#banner_inline_reserve_depart_text').val($('#banner_inline_reserve_arrive_text').val());
				$('#banner_inline_reserve_arrive_text').val(dateText);
				$(this).datepicker();

			} else {

				$("#banner_inline_reserve_depart").val(dateText);
				$('#banner_inline_reserve_depart_text').val(dateText);
				$(this).datepicker();
			}
		}
	});


	// Restaurant Subnav - Mobile
	$('.content-subnav__nav--desktop li').click(function() {
		$('.content-subnav__nav--desktop li').removeClass('active');
		$(this).addClass('active');

		$('html,body').animate({scrollTop: ($('.content-subnav__content #content-subnav__item-' + $(this).data('filter')).offset().top - 20)}, 500, function() {
			$('.content-subnav__content #content-subnav__item-' + $(this).data('filter')).focus();
		});
	});

	$('.content-subnav__select').on('change', function() {
		selected = $(this).find('.selected');

		$('#'+$(this).data('type')).val( selected.val() );
		$(this).siblings('.content-subnav__filter-selected').text( selected.text() );
	});

	$('.content-subnav__filter-select').click(function() {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().find('.content-subnav__select').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().find('.content-subnav__select').slideDown();
			$(this).parent().addClass('active');
		}
	});

	$('.content-subnav-select__items').click(function() {
		var val = $(this).text();
		var id = $(this).parent().data('type');
		$('.content-subnav-select__items').removeClass('selected');
		$(this).addClass('selected');

		$('.content-subnav__filter-selected').html(val);

		$('html,body').animate({scrollTop: ($('.content-subnav__content #content-subnav__content-' + $(this).data('filter')).offset().top)}, 500, function() {
			$('.content-subnav__content #content-subnav__content-' + $(this).data('filter')).focus();
		});

	});

	// Restaurant Category Gallery
	$('.category-gallery__nav li').on('click', function(e) {
		e.preventDefault();
		var clickItem = $(this).data('filter');

		$('.category-gallery__nav li').removeClass();

		$('.category-gallery__categorybox .category-gallery__category').removeClass('category-gallery__category--inactive');
		$('.category-gallery__categorybox .category-gallery__category').removeClass('category-gallery__category--active');
		$('.category-gallery__categorybox .category-gallery__category').addClass('category-gallery__category--inactive');

		$(this).addClass('active');

		$('#category-gallery__category-' + clickItem).removeClass('category-gallery__category--inactive');
		$('#category-gallery__category-' + clickItem).addClass('category-gallery__category--active');
	});

	$('.category-gallery__nav').niceScroll({
		horizrailenabled: true,
		cursordragontouch: true,
		horizrailenabled: true,
		disableoutline: true,
		cursorwidth: 5,
		nativeparentscrolling: false,
		enablemousewheel: false,
		autohidemode: "leave"
	});


	// On Scroll

	if ($('.content-subnav__content').show()) {
		var csc = {};

		$.each($('.content-subnav__content .content-subnav__item'), function(key, value) {
			csc[$(value).attr('id').replace('content-subnav__item-', '')] = [$(value).offset().top, ($(value).offset().top + $(value).outerHeight())];
		});
	}

	var lastScrollTop = 0;
	var activeTab = '';
	$(window).on('scroll', function() {
		offset_nav();
		mobile_reserve();
		var temp_active = '';
		var winScroll = $(window).scrollTop();
		var winHeight = winScroll + $(window).height();

		if( $('.content-subnav__content').length ) {
			if ( $('.content-subnav__content').isOnScreen() ) {
				$.each($('.content-subnav__item'), function(key, value) {
					if( $(value).isOnScreen() ) {
						$('.content-subnav__nav ul li').removeClass('active');
						$('.content-subnav__nav ul li.' + $(value).attr('id').replace('content-subnav__item-', '')).addClass('active');
						return false;
					}
				});
			}
		}
	});
});


$(window).on('load', function() {
	var gallery = $('.gallery').isotope({
		itemSelector: '.gallery__item',
		layoutMode: 'packery',
		packery: {
			gutter: '.gallery__gutter'
		},
		percentPosition: true,
	});

	flexim_slider();
	mobile_reserve();

	$('.fadein-slideready').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass('fadein-slideup');
		}
	});
	// Load Isotope after Images Loaded
	gallery.imagesLoaded().progress( function() {
		gallery.isotope('layout');
	});
	// Filter Items on Button Click
	$('.filters li').click(function(e) {
		e.preventDefault();
		for ( var filter_length = $('.gallery-nav li').length, i = 0; i < filter_length; i++) { 
			$('.filters li').removeClass('active');
		}
		$(this).addClass('active');
		gallery.isotope({filter: '.' + $(this).attr('data-filter')});
	});
	// Gallery - Magnific Popup
	var gallery_magnific_popup = {
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'gallery-mfp',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	}
	$('.gallery__item a').magnificPopup(gallery_magnific_popup);
	var offer_isotope = $('.offer-list__isotope').isotope({
		itemSelector: '.offer-list__item',
		layoutMode: 'packery',
		percentPosition: true,
	});
	// Filters
	var filters = $('.isotope-filter').isotope(filters_param());
	filters.isotope();
	if( filters.hasClass('photo-content__container') === true ) {
			var isoData = filters.data('isotope');
			var filteredItems = isoData.filteredItems;
			var itemCount = filteredItems.length;

			for ( var $i = 0; $i < itemCount; $i++ ) {
				var num = $i + 1;
				$(filteredItems[$i].element).removeClass('photo-content__item--right photo-content__item--left'); // reset
				if ( num % 2 == 0 ) {
					$(filteredItems[$i].element).addClass('photo-content__item--right');
				} else {
					$(filteredItems[$i].element).addClass('photo-content__item--left');
				}
			}
		}

	$('.filters .filters__item a').click(function(e) {
		e.preventDefault();
		$(this).parents('.filters').find('.filters__item').removeClass('filters__item--active');
		$(this).parent().addClass('filters__item--active');
		var filters_value = $(this).parent().data('filter');

		if ( filters_value == '*' ) {
			filters_value = '*';
		} else {
			filters_value = '.' + filters_value;
		}
		filters.isotope({filter: filters_value});

		if( filters.hasClass('photo-content__container') === true ) {
			var isoData = filters.data('isotope');
			var filteredItems = isoData.filteredItems;
			var itemCount = filteredItems.length;
			for ( var $i = 0; $i < itemCount; $i++ ) {
				var num = $i + 1;
				$(filteredItems[$i].element).removeClass('photo-content__item--right photo-content__item--left'); // reset
				if ( num % 2 == 0 ) {
					$(filteredItems[$i].element).addClass('photo-content__item--right');
				} else {
					$(filteredItems[$i].element).addClass('photo-content__item--left');
				}
			}
		}
	});

	
	// Navigation
	$('.nav-ham').click(function(e) {
		if ($('body').hasClass('nav-open')) {
			$('body').removeClass('nav-open');
			$('.nav-slider').removeClass('nav-slider--open');
		} else {
			e.stopPropagation();
			$('body').addClass('nav-open');
			$('.nav-slider').addClass('nav-slider--open');
		}
	});

	$('.nav-slider__menu-container li a').mouseenter(function() {
		$('.nav-slider__image--' + $(this).data('id') ).addClass('active');
	}).mouseleave(function() {
		$('.nav-slider__image--' + $(this).data('id') ).removeClass('active');
	});


	// Accordion
	$('.accordion__title-container').click(function() {
		if ( $(this).parent().find('.accordion__symbol').hasClass('accordion__symbol--plus') ) {
			$(this).parent().find('.accordion__symbol').removeClass('accordion__symbol--plus');
			$(this).parent().find('.accordion__symbol').addClass('accordion__symbol--minus');
			$(this).parent().find('.accordion__content').slideDown();
		} else {
			$(this).parent().find('.accordion__symbol').addClass('accordion__symbol--plus');
			$(this).parent().find('.accordion__symbol').removeClass('accordion__symbol--minus');
			$(this).parent().find('.accordion__content').slideUp();
		}
	});

	initialize_hr_widget();
	$('.nav-slider__menu-container .menu-item-has-children').on('click touch', function() {

		$(this).toggleClass('active');

		var subMenu = $(this).find('.sub-menu');
		subMenu.slideToggle(600);

	});

	document.getElementById("reserveButtonTop").addEventListener("click", function(){ HotelRunnerWidget.show(null); });
});

function screenHeight( elem, multiplier ) {
	var get_height = $(window).height();
	var get_width = $(window).width();

	elem.css('height', ''); // reset

	// var get_mainnav = $('.main-nav').height();

	// elem.height((get_height - get_mainnav) * multiplier);

	if( get_width <= 1024 ) {
		elem.height(get_height * multiplier);
	}
	else {
		if ($('.nav-block').length > 0) {
			elem.height( (get_height * multiplier) - 120);
		} else {
			elem.height(get_height * multiplier);
		}
	}
}


function sortByDate(filters){
	var arr = [];
		var itemsSelected = [];
		var items = filters.find('.isotope-filter__item');

		for (i = 0; i < items.length; i++){
			arr[i] = $(items[i]).data('time');
		}
		arr.sort()
		
		for (var i = 0; i < arr.length; i++) {
			for (var x = 0; x < items.length; x++) {

				if (arr[i] === $(items[x]).data('time')) {
					itemsSelected[i] = $(items[x]);
					
				}
			}
		}
		console.log(itemsSelected.sort());
		itemsSelected.sort()
		for (var i = 0; i < itemsSelected.length; i++) {
			itemsSelected[i].removeClass('photo-content__item--left');
			itemsSelected[i].removeClass('photo-content__item--right');

			if (i % 2) {
				itemsSelected[i].addClass('photo-content__item--left');
			} else {
				itemsSelected[i].addClass('photo-content__item--right');
			}
		}

		
}


function docReady_winResize_functions() {
	screenHeight( $('.banner--40'), 0.4 );
	screenHeight( $('.banner--50'), 0.5 );
	screenHeight( $('.banner--60'), 0.6 );
	screenHeight( $('.banner--70'), 0.7 );
	screenHeight( $('.banner--80'), 0.8 );
	screenHeight( $('.banner--90'), 0.9 );
	screenHeight( $('.banner--100'), 1 );
	offset_nav();
}

function docReady_winResize_functions_mobile() {
	screenHeight( $('.banner-mobile--40'), 0.4 );
	screenHeight( $('.banner-mobile--50'), 0.5 );
	screenHeight( $('.banner-mobile--60'), 0.6 );
	screenHeight( $('.banner-mobile--70'), 0.7 );
	screenHeight( $('.banner-mobile--80'), 0.8 );
	screenHeight( $('.banner-mobile--90'), 0.9 );
	screenHeight( $('.banner-mobile--100'), 1 );
	offset_nav();
}


function flexim_slider() {

	var container = $('.flexim-slider--desktop .flexim-slider__container');

	$.each( container, function( el_key, el_value ) {

		var container_width = $(window).width(); //width of flexim-slider
		var container_width_style = window.getComputedStyle ? getComputedStyle(el_value, null) : el_value.currentStyle;
		var container_padding_left = parseFloat(container_width_style.paddingLeft) || 0;
		var container_padding_right = parseFloat(container_width_style.paddingRight) || 0;

		// var item_width = container_width * 0.4; //width per item
		// var numberOfItem = $(".flexim-slider--desktop .flexim-slider__container > .flexim-slider__imagebox").length * item_width;

		if ($(window).width() >=768) {

			// $('.flexim-slider__container').css('width', (numberOfItem + (container_width * 0.1)) + 'px');
			// $('.flexim-slider__imagebox').css('width', item_width + 'px');
			var containerWidth = 0;
			$.each($('.flexim-slider--desktop .flexim-slider__container .flexim-slider__imagebox'), function( key, value ) {

				var style = window.getComputedStyle ? getComputedStyle(value, null) : value.currentStyle;
				var marginRight = parseInt(style.marginRight) || 0;

				containerWidth += $(value).context.clientWidth + marginRight;

			});

			$('.flexim-slider--desktop .flexim-slider__container').css('width', (containerWidth + container_padding_left + container_padding_right) + 'px');

		} else {

			$('.flexim-slider__container').css('width', '100%');
			// $('.flexim-slider__imagebox').css('width', '100%');

		}

	});

}

function checkPressItems() {
	var press_item = $('.press-logo').find('.press-logo__item--hidden');
		if (!press_item.length) {
			$('.press_logo__view-more').css('display', 'none');
		}
}


function pressLogoDisplay() {
	$('.press_logo__view-more a').click(function() {

		var press_item = $('.press-logo').find('.press-logo__item--hidden');
		
		for (var i = 0; i < press_item.length; i++) {
			if ($(press_item[i]).hasClass('press-logo__item--hidden')) {
			
				$(press_item[i]).removeClass('press-logo__item--hidden');
				$(press_item[i]).addClass('press-logo__item--displayed');

			}
			
			if (i >= 7) {
				break;
			}
		}

		checkPressItems();

	});
}


function step_images() {

	var imageConHeight = $('.step-imagecon__images').height();

	if ($(window).width() <= 767) {
		$('.step-imagecon__images div.step-imagecon__imagebox:nth-child(1)').attr('style', '');
		$('.step-imagecon__images div.step-imagecon__imagebox:nth-child(3)').attr('style', '');

	} else {
		$('.step-imagecon__images div.step-imagecon__imagebox:nth-child(1)').css('margin-top', '-' + (imageConHeight * 0.20) + 'px');
		$('.step-imagecon__images div.step-imagecon__imagebox:nth-child(3)').css('margin-top', (imageConHeight * 0.15) + 'px');
	}
}


// Restaurant Sub Navigation Animation

function offset_nav() {
	try {
		var resConOffset = $('.content-subnav').offset().top;

		// Desktop

		if ($(window).width() >= 768) {

			var navOffsetDesktop = $('.content-subnav__nav--desktop');

			// +150 for logo also -150

			if ( ($(window).scrollTop() + 150 ) > resConOffset ) {

				// Parent Height - Parent padding-bottom - Nav height;

				var position = $('.content-subnav').height() - $('.content-subnav__nav--desktop').find('ul').height();

				// Scroll within the parent div

				if ( ($(window).scrollTop() ) - ( resConOffset - 150 ) < ( $('.content-subnav').height() ) - $('.content-subnav__nav--desktop').find('ul').height() ) {
					navOffsetDesktop.attr('style', 'top:' + ($(window).scrollTop() - (resConOffset - 150)) + 'px');

				// Scroll outside(below) the parent div

				} else if ( $(window).scrollTop() - ( resConOffset - 150 ) > ( $('.content-subnav').height() ) ) {
					navOffsetDesktop.attr('style', 'top:' + position + 'px');

				}

			} else {
				navOffsetDesktop.attr('style', 'top: 0px;');
			}


		// Mobile - Comment for now because it has a bug

		} else {

			/*var navOffsetMobile = $('.content-subnav__nav--mobile');

			if ($(window).scrollTop() > (resConOffset - 135)) {

				var position = $('.content-subnav').height() - 135;

				//scroll within the parent div
				if ($(window).scrollTop() - (resConOffset - 20) < ($('.content-subnav').height() - 135)) {
					navOffsetMobile.attr('style', 'top:' + ($(window).scrollTop() - (resConOffset)) + 'px');

				//scroll outside(below) the parent div
				} else if ($(window).scrollTop() - (resConOffset - 135) > ($('.content-subnav').height() - 135)) {
					navOffsetMobile.attr('style', 'top:' + position + 'px');

				}

			} else {
				navOffsetMobile.attr('style', 'top: -135px;');
			}*/
		}
	} catch(err) {
		
	}
}

function filters_param() {

	var ret = {
				itemSelector: '.isotope-filter__item',
				layoutMode: 'fitRows',
			};
	if ($('.isotope-filter').data('filter')) {
		ret['filter'] = $('.isotope-filter').data('filter');
	}

	return ret;
}

function mobile_reserve() {
	if ($(window).width() < 768) {

		$banner_height = $('.banner').height() + 65;
		if (($(window).scrollTop() + $(window).height() - 100) <= $banner_height) {
			$('.nav-reserve').addClass('nav-reserve--hide');
		} else {
			if ($(window).scrollTop() + $(window).height() > $('.animsition').height() - $('.nav-reserve').height()) {
				$('.nav-reserve').addClass('nav-reserve--hide-in-footer');
			} else {
				$('.nav-reserve').removeClass('nav-reserve--hide');
				$('.nav-reserve').removeClass('nav-reserve--hide-in-footer');
			}
		}


	}
}


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


$(document).ready(function() {

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

	// var mX = 0;
	// $('.twin-slider-right-js, .twin-slider-left-js').mousemove(function(e) {

	//     if (e.pageX < mX) {
	//     	$(this).removeClass('drag-right');
	//         $(this).addClass('drag-left');

	//     } else {
	//         $(this).removeClass('drag-left');
	//         $(this).addClass('drag-right');
	//     }
	//     mX = e.pageX;

	// });

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
		//navText: ['<img src="' + template_url + '/images/arrow-left.png">', '<img src="' + template_url + '/images/arrow-right.png">'],
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

	// $('.brand-image-slider .brand-image-slider-js').slick({
	// 	centerMode: true,
	// 	centerPadding: '7%',
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	prevArrow: false,
	// 	nextArrow: false
	// });

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
			// when window width is <= 320px
			// 320: {
			// 	slidesPerView: 1,
			// 	spaceBetween: 10
			// },
			// when window width is <= 767px
			767: {
				centeredSlides: true,
				initialSlide: 1,
			},
			// when window width is <= 768px
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
		// autoplayHoverPause:true,
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
		// autoplayHoverPause:true,
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


	// lat/long click
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


	// Reserve Popup

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

	// $('#banner_inline_reserve_arrive').val(date_today_text);
	// $('#banner_inline_reserve_depart').val(date_tomorrow_text);

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


	// Datepicker - Reserve Popup

	$('.reserve-popup__datepicker').datepicker({
		dateFormat: "mm/dd/yy",
		minDate: 0,
		dayNamesMin: week,
		monthNames: months,
		numberOfMonths: [1,2],
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $("#arrival_date").val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $("#departure_date").val());

			if (date1 && (date.getTime() == date1.getTime())) {
				className = "arrival-date"
			}
			else if (date2 && (date.getTime() == date2.getTime())) {
				className = "departure-date";
			}
			else if ((date1 && date2) && (date1 < date && date < date2)) {
				className = "between-date";
			}
			else {
				className = "";
			}

			return [true, className];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $("#arrival_date").val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $("#departure_date").val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			if (!date1 || date2) {
				$("#arrival_date").val(dateText);
				$("#departure_date").val("");
				$(this).datepicker();
			} else if ( selectedDate < date1 ) {
				$("#departure_date").val( $("#arrival_date").val() );
				$("#arrival_date").val(dateText);
				$(this).datepicker();
			} else {
				$("#departure_date").val(dateText);
				$(this).datepicker();
			}
		}
	});

	reserve_dp_datepicker_reserve.datepicker({
		dateFormat: 'mm/dd/yy',
		dayNamesMin: week,
		monthNames: months,
		showOtherMonths: true,
		firstDay: 0, // Sunday
		minDate: 0,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#reserve_depart').val());

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
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#reserve_depart').val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			// Get New Text
			var selected_text = $.datepicker.formatDate(dateFormat_formBooking, selectedDate);

			// Get Arrive Text
			var arrive_text = $.datepicker.formatDate(dateFormat_formBooking, date1);

			if ( $(this).hasClass('arrive') ) {

				$('#reserve_arrive').val(dateText);
				$('#reserve_depart').val("");
				reserve_dp_text_arrive.text(selected_text);
				reserve_dp_text_depart.text("");
				reserve_dp_reserve_arrive.removeClass('active');
				reserve_dp_reserve_depart.addClass('active');
				$(this).removeClass('arrive first');
				$(this).addClass('depart');

			} else if ( $(this).hasClass('depart') && $(this).hasClass('first') ) {

				$('#reserve_depart').val(dateText);
				reserve_dp_text_arrive.text(arrive_text);
				reserve_dp_text_depart.text(selected_text);
				reserve_dp_reserve_depart.removeClass('active');
				$(this).removeClass('depart first');
				reserve_dp_formy_row.slideUp(400);

			} else if ( selectedDate < date1 ) {

				$('#reserve_depart').val($('#reserve_arrive').val());
				$('#reserve_arrive').val(dateText);
				reserve_dp_text_arrive.text(selected_text);
				reserve_dp_text_depart.text(arrive_text);
				reserve_dp_reserve_arrive.removeClass('active');
				reserve_dp_reserve_depart.removeClass('active');
				$(this).removeClass('arrive depart first');
				reserve_dp_formy_row.slideUp(400);

			} else {

				$("#reserve_depart").val(dateText);
				reserve_dp_text_depart.text(selected_text);
				reserve_dp_reserve_depart.removeClass('active');
				$(this).removeClass('depart first');
				reserve_dp_formy_row.slideUp(400);

			}

			$(this).datepicker();
			$(this).datepicker('setDate', $(this).datepicker('getDate'));
		}
	});


	/*
	.on('mouseover', 'td', function(e) {

		var target = $(this),

		datepicker = target.parents('.formy__datepicker-reserve--datepicker'),
		datepicker_data = datepicker.data('datepicker'),

		datepicker_date_year = datepicker_data.selectedYear;
		datepicker_date_month = datepicker_data.selectedMonth + 1,
		datepicker_date_day = parseInt(target.find('a').text());

		datepicker_date_selected = datepicker_date_month + '/' + datepicker_date_day + '/' + datepicker_date_year;

		$(this).datepicker('setDate', $.datepicker.parseDate(dateFormat_default, datepicker_date_selected));

	});
	*/

	$('#inline_reserve_arrive_text.formy__datepicker--inline').datepicker({
		dateFormat: 'mm/dd/yy',
		dayNamesMin: week,
		monthNames: months,
		showOtherMonths: true,
		firstDay: 0, // Sunday
		minDate: 0,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_depart').val());

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
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_depart').val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			if (!date1 || date2) {

				$('#inline_reserve_arrive').val(dateText);
				$('#inline_reserve_depart').val("");

				$('#inline_reserve_arrive_text').val(dateText);
				$('#inline_reserve_depart_text').val("");
				$(this).datepicker();

			} else if ( selectedDate < date1 ) {

				$('#inline_reserve_depart').val($('#inline_reserve_arrive').val());
				$('#inline_reserve_arrive').val(dateText);

				$('#inline_reserve_depart_text').val($('#inline_reserve_arrive_text').val());
				$('#inline_reserve_arrive_text').val(dateText);
				$(this).datepicker();

			} else {

				$("#inline_reserve_depart").val(dateText);
				$(this).datepicker();

			}

			$( "#inline_reserve_depart_text.formy__datepicker--inline" ).datepicker("option", "minDate", selectedDate );
			setTimeout(function(){
				$( "#inline_reserve_depart_text.formy__datepicker--inline" ).datepicker('show');
			}, 16);  

		}
	});

	$('#inline_reserve_depart_text.formy__datepicker--inline').datepicker({
		dateFormat: 'mm/dd/yy',
		dayNamesMin: week,
		monthNames: months,
		showOtherMonths: true,
		firstDay: 0, // Sunday
		minDate: 0,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_depart').val());

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
			var date1 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_arrive').val());
			var date2 = $.datepicker.parseDate(dateFormat_default, $('#inline_reserve_depart').val());
			var selectedDate = $.datepicker.parseDate(dateFormat_default, dateText);

			if (!date1 || date2) {

				$('#inline_reserve_arrive').val(dateText);
				$('#inline_reserve_depart').val("");

				$('#inline_reserve_arrive_text').val(dateText);
				$('#inline_reserve_depart_text').val("");
				$(this).datepicker();

			} else if ( selectedDate < date1 ) {

				$('#inline_reserve_depart').val($('#inline_reserve_arrive').val());
				$('#inline_reserve_arrive').val(dateText);

				$('#inline_reserve_depart_text').val($('#inline_reserve_arrive_text').val());
				$('#inline_reserve_arrive_text').val(dateText);
				$(this).datepicker();

			} else {

				$("#inline_reserve_depart").val(dateText);
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


	/* Booking Datepicker */

	$.datepicker._defaults.dateFormat = "mm/dd/yy";

	$('.slide-booking-widget__datepicker').datepicker({
		dateFormat: "mm/dd/yy",
		minDate: 0,
		// minDate: new Date("2018-05-01"),
		numberOfMonths: [1,2],
		dayNamesMin: week,
		monthNames: months,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_arrival_date").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_departure_date").val());

			if (date1 && (date.getTime() == date1.getTime())) {
				className = "arrival-date"
			}
			else if (date2 && (date.getTime() == date2.getTime())) {
				className = "departure-date";
			}
			else if ((date1 && date2) && (date1 < date && date < date2)) {
				className = "between-date";
			}
			else {
				className = "";
			}

			return [true, className];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_arrival_date").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_departure_date").val());
			var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

			if (!date1 || date2) {
				$("#book_arrival_date").val(dateText);
				$("#book_departure_date").val("");
				$('.slide-booking-widget__datepicker-mobile').datepicker("refresh");
			} else if ( selectedDate < date1 ) {
				$("#book_departure_date").val( $("#book_arrival_date").val() );
				$("#book_arrival_date").val(dateText);
				$('.slide-booking-widget__datepicker-mobile').datepicker("refresh");
			} else {
				$("#book_departure_date").val(dateText);
				$('.slide-booking-widget__datepicker-mobile').datepicker("refresh");
			}
		}
	});

	$('.slide-booking-widget__datepicker-mobile').datepicker({
		dateFormat: "mm/dd/yy",
		minDate: 0,
		// minDate: new Date("2018-05-01"),
		numberOfMonths: [1,1],
		dayNamesMin: week,
		monthNames: months,
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_arrival_date").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_departure_date").val());

			if (date1 && (date.getTime() == date1.getTime())) {
				className = "arrival-date"
			}
			else if (date2 && (date.getTime() == date2.getTime())) {
				className = "departure-date";
			}
			else if ((date1 && date2) && (date1 < date && date < date2)) {
				className = "between-date";
			}
			else {
				className = "";
			}

			return [true, className];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_arrival_date").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_departure_date").val());
			var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

			if (!date1 || date2) {
				$("#book_arrival_date").val(dateText);
				$("#book_departure_date").val("");
				$('.slide-booking-widget__datepicker').datepicker("refresh");
			} else if ( selectedDate < date1 ) {
				$("#book_departure_date").val( $("#book_arrival_date").val() );
				$("#book_arrival_date").val(dateText);
				$('.slide-booking-widget__datepicker').datepicker("refresh");
			} else {
				$("#book_departure_date").val(dateText);
				$('.slide-booking-widget__datepicker').datepicker("refresh");
			}
		}
	});

	$('.slide-booking-widget__datepicker, .slide-booking-widget__datepicker-mobile').on({
		mouseenter: function(){
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_arrival_date").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#book_departure_date").val());

			if( date1 && !date2 ) {
				$(".between-date").removeClass("between-date"); // reset
				isBetween = false;
				foundFirst = 0;
				calendar = $(this).closest('.ui-datepicker');
				if(calendar.find('.arrival-date').length > 0 && calendar.find('.departure-date').length == 0) {
					calendar.find('.ui-state-default').each(function() {
						if($(this).hasClass("ui-state-active")) {
							if(foundFirst==0) foundFirst=-1;
							isBetween = (foundFirst == -1 ? true : false);
						}
						if($(this).hasClass("ui-state-hover")) {
							if(foundFirst==0) foundFirst=1;
							isBetween = (foundFirst == 1 ? true : false);
						}
						if(isBetween) {
							$(this).parent().addClass("between-date");
						}
					});
				}
			}
		}
	}, 'td a');

	/* Initialize the booking values */
	$.each($('.slide-booking-widget__filter-select .slide-booking-widget__select'), function( key, value ) {
		selected = $(value).find('.selected');

		$('#'+$(value).data('type')).val( selected.val() );
		$(value).siblings('.slide-booking-widget__filter-selected').text( selected.text() );
	});

	/* Booking Select on change */
	$('.slide-booking-widget__filter-select .slide-booking-widget__select').on('change', function() {
		selected = $(this).find('.selected');

		$('#'+$(this).data('type')).val( selected.val() );
		$(this).siblings('.slide-booking-widget__filter-selected').text( selected.text() );
	});

	$('.slide-booking-widget__filter-select').click(function() {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().find('.slide-booking-widget__select').slideUp();
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().find('.slide-booking-widget__select').slideDown();
			$(this).parent().addClass('active');
		}
	});

	$('.slide-booking-widget-select__items').click(function() {
		var val = $(this).text();
		var id = $(this).parent().data('type');
		$('.slide-booking-widget-select__items').removeClass('selected');
		$(this).addClass('selected');

		$('#book_adult').val($(this).data('val'));

		$(this).parent().prev().text(val);

		$('#'+ id).val($(this).data('val'));

	});

	$('.slide-booking-widget__submit a').click(function(){
		hotelID = $('#book_hotel_id').val();
		chainID = $('#book_chain_id').val();
		adult = $('#book_adult').val();
		room = $('#book_room').val();
		arrivalDate = $('#book_arrival_date').val();
		departureDate = $('#book_departure_date').val();
		locale = $('#book_locale').val();
		$(this).attr('href', 'https://be.synxis.com/?&hotel='+hotelID+'&Chain='+chainID+'&arrive='+arrivalDate.replace(/\//g,'%2F')+'&depart='+departureDate.replace(/\//g,'%2F')+'&adult='+adult + '&locale=' + locale+'&rooms='+room);
	});


	// DATEPICKERS

	$.datepicker._defaults.dateFormat = 'mm/dd/yy';
	
	$( "#inline_reserve_arrive_text" ).datepicker({
		minDate: 0,
		dayNamesMin: week,
		monthNames: months,
		
		beforeShowDay: function(date) {
		var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_arrive").val());
		var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_depart").val());
		return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
		},

		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_arrive").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_depart").val());
			var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
			$("#dater").datepicker("option", "minDate", dateText);

			function parseDate(dateText) {
				
			  var parts = dateText.split('-');
			  // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
			  return parts[1] + '/' + parts[2] + '/' + parts[0]; // Note: months are 0-based
			}
			console.log(dateText);
			$('#inline_reserve_arrive_text').val(dateText);
			$("#inline_reserve_arrive").val(dateText);
			$("#inline_reserve_depart").val("");

		},

		onClose: function(){
			$(this).parent().next().find('input.hasDatepicker').datepicker('show');
		}

		

	});

	$( "#inline_reserve_depart_text" ).datepicker({

		minDate: 0,
		dayNamesMin: week,
		monthNames: months,

		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_arrive").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_depart").val());
			return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_arrive").val());
			var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#inline_reserve_depart").val());
			var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

			function parseDate(dateText) {
			  var parts = dateText.split('-');
			  return parts[1] + '/' + parts[2] + '/' + parts[0]; // Note: months are 0-based
			}

			$('#inline_reserve_depart_text').val(dateText);
			$("#inline_reserve_depart").val(dateText);	
		},

		onClose: function(){
			$(this).parent().next().find('select').focus();
		}

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

/*	$('.content-subnav__item').bind('inview', function (event, visible) {
		if (visible == true) {
			$('.content-subnav__nav ul li').removeClass('active');
			$('.content-subnav__nav ul li.' + $(this).attr('id').replace('content-subnav__item-', '')).addClass('active');
		}
	});*/

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





});

$(window).load(function() {

	$('.nav-slider__menu-container .menu-item-has-children').on('click touch', function() {

		$(this).toggleClass('active');

		var subMenu = $(this).find('.sub-menu');
		subMenu.slideToggle(600);

	});
	
});
/*global $, alert, console*/

$(function () {

	'use strict';

	$('html').niceScroll();

	$('.header').height($(window).height());


	//Smooth Scroll To Div

	$('.links li a').click(function () {

		$('html, body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		}, 1000);


	});

	//Slider For Our-Clients

	(function autoSlider() {

		$('.slider .active').each(function () {

			if(!$(this).is(':last-child')) {

				$(this).delay(3000).fadeOut(1000, function () {

					$(this).removeClass('active').next().addClass('active').fadeIn();

					autoSlider();
				});

			} else {

				$(this).delay(3000).fadeOut(1000, function () {

					$(this).removeClass('active');

					$('.slider div').eq(0).addClass('active').fadeIn();

					autoSlider();
				});
			}

		});

	}());

});
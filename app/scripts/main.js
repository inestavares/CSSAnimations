'use strict';

$(window).load(function() {
	// create a function animate items that takes a parameter i
		// declare variables
		var animatable = $('.animatable');
		var animationClasses = ['fadein', 'drawwidth', 'slideleft', 'fadein', 'fadein', 'drawwidth', 'fadein'];
		var preAnimationEnd = 'animationend webkitAnimationEnd MozTransitionEnd oTransitionEnd';
		var i = 0;
		$(animatable[0]).addClass('fadein').toggleClass('invisible');
			$(animatable).on(preAnimationEnd, function() {
				console.log('meh');
				i++;
				$(animatable[i]).addClass(animationClasses[i]).toggleClass('invisible');
			});
		$('.firstbounce').on(preAnimationEnd, function() {
			$('#ball').addClass('secondbounce').on(preAnimationEnd, function() {
				$('#ball').addClass('thirdbounce').on(preAnimationEnd, function() {
				    $('#ball').addClass('fourthbounce');
					/* Act on the event */
				});
			});
		});
});

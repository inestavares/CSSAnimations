'use strict';

$(window).load(function() {
	// create a function animate items that takes a parameter i
		// declare variables
		var animatable = $('.animatable');
		var animationClasses = ["fadein", "drawwidth", "slideleft", "fadein", "fadein", "drawwidth", "fadein"]; 
		var preAnimationEnd = 'animationend webkitAnimationEnd MozTransitionEnd oTransitionEnd';
		var i = 0;
		$(animatable[0]).addClass('fadein').toggleClass('invisible');
			$(animatable).on(preAnimationEnd, function() {
				console.log("meh");
				i++;
				$(animatable[i]).addClass(animationClasses[i]).toggleClass('invisible');
			});
			
		$('.firstarch').on(preAnimationEnd, function() {
			$('#ball-container').addClass('secondarch').on(preAnimationEnd, function() {
				$('#ball-container').addClass('thirdarch').on(preAnimationEnd, function() {
					$('#ball-container').addClass('fourtharch');
					/* Act on the event */
				});;

			});
		});		


			
	});


		
		
		





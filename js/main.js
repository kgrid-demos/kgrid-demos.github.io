(function ($) {

		$('.navbar-collapse').on('hidden.bs.collapse', function () {
			  $(".navbar-toggle").removeClass("active");
					$('body').css('overflow', 'scroll');
					$('body').css('position', 'relative');
			});

			$('.navbar-collapse').on('show.bs.collapse', function () {
				$(".navbar-toggle").addClass("active");
					$('body').css('overflow', 'hidden');
					$('body').css('position', 'fixed');
			});

		onload = onresize = function() {
			var viewport_width = $(window).width();
			var viewport_height = $(window).height();

			if(viewport_width>=320){
				jQuery('#amid-parent').height(jQuery('#amid-side').outerHeight());
				var maxHeight = 0;
				$(".use-detail").each(function() {
					$(this).css("height","auto");
	  			if ($(this).outerHeight() > maxHeight) {
			 			maxHeight = $(this).outerHeight();
	  			}
				}).height(maxHeight);
				var maxHeight1=0;
				$(".component-title").each(function() {
					$(this).css("height","auto");
					if ($(this).outerHeight() > maxHeight1) {
						maxHeight1 = $(this).outerHeight();
					}
				}).height(maxHeight1);
			}else{
				$(".use-detail").each(function() {
					$(this).css("height","auto");

				});

				jQuery('#amid-parent').height(jQuery('#amid-parent .align-mid').outerHeight()+50);
			}
			if(viewport_width>991){
				$(".navbar-nav-m").css("height","auto");
				}else{
				$(".navbar-nav-m").height(viewport_height-60);
			}

		};
	// local scroll
	 	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

		jQuery('.navbar-nav>li:first-child').addClass('active');

		if (Modernizr.mq("screen and (max-width:1024px)")) {
					jQuery("body").toggleClass("body");
			} else {
				var s = skrollr.init({
					mobileDeceleration: 1,
					edgeStrategy: 'set',
					forceHeight: true,
					smoothScrolling: true,
					smoothScrollingDuration: 300,
						easing: {
							WTF: Math.random,
							inverted: function(p) {
								return 1-p;
							}
						}
					});
			}
			$('.dropdown').on('show.bs.dropdown', function(e){
			  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
			});

			$('.dropdown').on('hide.bs.dropdown', function(e){
			  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
			});

})(jQuery);

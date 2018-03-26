(function ($) {

		$(window).scrollTop(100);
		$(document).on('click', 'a[href^="#"]', function(event){
		    event.preventDefault();
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 600);
		});
		$.force_appear();

		jQuery('.sidenav li:first-child').addClass('active');
		$('.dropdown').on('show.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
		});

		$('.dropdown').on('hide.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
		});
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

			onload = onresize = function() {
				var viewport_width = $(window).width();
				var viewport_height = $(window).height();

				if(viewport_width>991){
					$(".navbar-nav-m").css("height","auto");
					}else{
					$(".navbar-nav-m").height(viewport_height-60);
				}
		};

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
	//scroll menu
		jQuery('.appear').appear();
		jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.sidenav li').removeClass('active');
			jQuery(".sidenav a[href='#" + id + "']").parent().addClass("active");
		});

})(jQuery);

$(function()
 {
    $('.aboutme_grids').slick(
    {
        centerMode: true,
        slidesToShow : 3,
        autoplay : true,
        arrows : true,
        dots : true,
        infinite : true,
        prevArrow : '.slider_previous',
        nextArrow : '.slider_next',
        autoplaySpeed : 1500,
        responsive:
        [
            {
                breakpoint: 991,
                settings:
                {
                    arrows: false,
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    $('.venobox').venobox(
    {
        spinner : 'wandering-cubes',
        spinColor : '#02918c',
        numeratio : true,
        closeBackground : '#006662',
        numerationBackground : '#006662',
        arrowsColor : '#02918c',
        infinigall : true,
        titleBackground : '#006662'
    });
    
    $('a[href*="#"]:not([href="#').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$("html,body").animate({
					scrollTop: target.offset().top - 60
				}, 1000);
				return false;
			}
		}
	});
    
    $(window).on('load',function(){
		$(".preloader_main").delay(1000).fadeOut(1000);
	});
    
    $(window).scroll(function() 
    {
        var scrollValue = $(window).scrollTop();

        if (scrollValue > 200)
        {
            $(".top_button").fadeIn(1000);
        }
        else
        {
            $(".top_button").fadeOut(1000);
        }
    });

    $(".top_button").click(function() 
    {
        $("html, body").animate({scrollTop : 0}, 1000);
    });
})
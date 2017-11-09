$(document).ready(function(){
	$('.wr-slider-top').slick({
		dots: true
		/*autoplay: true,
		autoplaySpeed: 2000,*/
	});

    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
    
});
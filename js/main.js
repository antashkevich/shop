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

    /*drop down menu*/
    $(function(){
  
        $('li.dropdown > a').on('click',function(event){        
            event.preventDefault()            
            $(this).parent().find('ul').first().toggle(300);            
            $(this).parent().siblings().find('ul').hide(200);
            
            $(this).parent().find('ul').mouseleave(function(){  
                var thisUI = $(this);
                $('html').click(function(){
                    thisUI.hide();
                    $('html').unbind('click');
                });
            });    
            
        });      
    });
    
});
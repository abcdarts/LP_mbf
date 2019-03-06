$(function(){
    $('.js-anchor').find('a').on('click', function(e){
        e.preventDefault();
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        removeNav();
        return false;
    });

    $('.js-fixNavBtn').on('click', function(e){
        e.preventDefault();
        var bodyH = $('body').height();
        var sc = $(window).scrollTop();
        if($('.js-fixNavBtn').hasClass('is-open')){
            removeNav();
        } else {
            $('.js-fixNavBtn').addClass('is-open').find('img').attr('src', 'img/pc_nav_btn_opened.png');
            $('.fixed_nav').css({
                'height': bodyH
            });
            $('.fixed_nav').fadeIn();
            $('.fixed_navList').css({
                'top': sc
            });
        }
    });


    removeNav = function(){
        $('.js-fixNavBtn').removeClass('is-open').find('img').attr('src', 'img/pc_nav_btn_closed.png');
        $('.fixed_nav').fadeOut();
    }

});
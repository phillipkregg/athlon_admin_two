
$(document).ready(function() {


    //**** Close all nav boxes except for top level
    var $boxes = $('.main-menu-span .box .box-content');
    var $icons = $('.main-menu-span .box .box-icon i');


    $boxes.not(':first').hide();
    $boxes.siblings('.box-header:first').addClass('left-nav-border');



    //**** Make nav boxes clickable by title and change arrow depending on open or close status
    $('.btn-header-minimize').parent().parent().click(function(e){
        e.preventDefault();
        var $target = $(this).next('.box-content');
        var $icon = $(this).find('.box-icon i');



        if($target.is(':visible')) {
            $($($icon)).removeClass('icon-chevron-down').addClass('icon-chevron-right');
            //$(this).removeClass('left-nav-border');
        } else {
            $($($icon)).removeClass('icon-chevron-right').addClass('icon-chevron-down');
            //$(this).addClass('left-nav-border');
        }

        $target.slideToggle('fast');


    });


    //*** subnav ***
    $subnav = $('.box-content:first ul li');

    $($subnav).bind('click', function() {

        $(this).addClass('active-sub-nav');
        $(this).siblings().removeClass('active-sub-nav');


    });



});



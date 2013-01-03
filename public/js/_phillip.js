
$(document).ready(function() {


    //**** Close all nav boxes except for top level
    var $boxes = $('.main-menu-span .box .box-content');

    $boxes.not(':first').hide();

    console.log($boxes);

    //**** Make nav boxes clickable by title and change arrow depending on open or close status
    $('.btn-header-minimize').click(function(e){
        e.preventDefault();
        var $target = $(this).parent().parent().next('.box-content');
        var $icon = $(this).parent().parent().find('.box-icon i');

        if($target.is(':visible')) $($($icon)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
        else 					   $($($icon)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
        $target.slideToggle('fast');

    });


});



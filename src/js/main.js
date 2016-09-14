$(".menu-toggle").click(function () {
    $(this).next().toggleClass("menu-open");
});
/*
$(function () {
    var fixblock_height = $('.top-panel').height();
    var fixblock_pos = $('.top-panel').position().top;
    $(window).scroll(function () {

        if ($(window).scrollTop() > fixblock_pos) {
            $('.top-panel').addClass('down-scroll');
        } else {
            $('.top-panel').removeClass('down-scroll');
        }
    })
});
*/
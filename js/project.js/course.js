$(function(){
        $(window).scroll(function () {
        var win = $(this).scrollTop();
        if (win > 700) {
            $(".up").fadeIn(1000);

        } else {
            $(".up").fadeOut(1000);
        }
    });
        $(".up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });
           $("body").niceScroll({
        cursorcolor: "#ffc107",
        cursorwidth: "14px"
    });
});
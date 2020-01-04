$(document).ready(function () {
    //start main page
    //    owl curosal in service section
    $("#owl-example").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 800,
        autoplay: true,
        nav: false,
        dots: true
    });
  //    owl curosal in service section
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
//    nice scroll
        $("body").niceScroll({
        cursorcolor: "#ffc107",
        cursorwidth: "14px"
    });
//spinnner
    $(".lds-ring div").fadeOut(3000,
        function () {
            $(this).parent().fadeOut(3000,
                function () {
                    $(this).remove();
                });
        });
    //end main page
});


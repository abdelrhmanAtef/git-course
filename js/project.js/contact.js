function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
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
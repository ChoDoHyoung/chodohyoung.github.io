$(document).ready(function () {
    $(".top_h1").textyleF({
        duration : 1000,
        delay : 180
    });
    $(".top_h2").textyleF({
        duration : 300,
        delay : 100,
        easing : 'cubic-bezier(0.8, 0.15, 0.15, 0.9)',
        callback : function(){
            $(this).css({
            color : '#fff',
            transition : '1s',
            });
            $('.desc').css('opacity',1);
        }
    });

    setTimeout(Top_p_event, 4200);

    function Top_p_event() {
        $(".top_p").css("opacity",1);
        $(".top_p > a").css("opacity",1);
        $(".arrow_cicle").css("opacity",1);
    }
});
let open = document.getElementById('open-icon');



$(document).ready(function(){
    $('.open-icon , .close-icon ,.menu ,.hide').click(function(){
        $('.open-icon').fadeToggle();
        $('.close-icon').fadeToggle();
        $('.menu').fadeToggle();
        $('.hide').fadeToggle();
    })
})






new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]');
  $(function() {
    $("body").niceScroll({
        cursorcolor : "pink"
    });
});

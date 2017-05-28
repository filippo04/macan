$(document).ready(function(){
    $(".works-link, .menu-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){    
    $(".arrow .top").hide();
            $(function () {
            $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $(".arrow .top").css("display","block");}
        else {
            $(".arrow .top").css("display","none");}
    });
$('.arrow .top').click(function () {
    $('html, body').animate({
    scrollTop: $(".header ").offset().top
    }, 2000);
    });
    });
}); 
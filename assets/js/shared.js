// Cursor ucun js

$(document).ready(function(){
    $("#lang-all").click(function(){
        $("#lang-drop-down").toggleClass("open");
        $("#chevron").toggleClass("chevron-toggle");
    });
    $("#aze").click(function(){
        $("#aze").toggleClass("selected");
        $("#eng").removeClass("selected");
        $("#rus").removeClass("selected");
        $("#lang").text("AZ");
    });
    $("#eng").click(function(){
        $("#eng").toggleClass("selected");
        $("#aze").removeClass("selected");
        $("#rus").removeClass("selected");
        $("#lang").text("EN");
    });
    $("#rus").click(function(){
        $("#rus").toggleClass("selected");
        $("#aze").removeClass("selected");
        $("#eng").removeClass("selected");
        $("#lang").text("RU");
    });
});
$( window ).on( "load", function() {
    $('#preloader').fadeOut('slow');
    $('body').css('overflow','visible');
});
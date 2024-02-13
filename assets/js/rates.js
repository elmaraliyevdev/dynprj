$(document).ready(function(){
    $('.türkiye').click(function(){
        $(".usa").removeClass("active");
        $(this).addClass("active");
        $(".from-usa").hide();
        $(".from-türkiye").fadeIn("slow");    
    });
    $('.usa').click(function(){
        $(".türkiye").removeClass("active");
        $(this).addClass("active");
        $(".from-türkiye").hide();
        $(".from-usa").fadeIn("slow");
    });
    $('.branch').click(function(){
        $(".home").removeClass("focus");
        $(this).addClass("focus");
        $(".to-address").hide();
        $(".to-branch").fadeIn("slow");  
    });
    $('.home').click(function(){
        $(".branch").removeClass("focus");
        $(this).addClass("focus");
        $(".to-branch").hide();
        $(".to-address").fadeIn("slow");
    });
});



// ABS Turkiye => Filiala catdirilma unvana catdirilma



// sayfanın yüklenmesi tamamlandığında ($(document).ready()), 
// belirli HTML öğelerine tıklama olaylarını ele alır ve 
// bu tıklamalara yanıt olarak belirli işlemleri gerçekleştirir.
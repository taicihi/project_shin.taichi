
$(document).ready(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function() {
        $("body,html").animate({scrollTop:0},800); // 800msかけて上に戻る
    });

    
});

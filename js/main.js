$(function(){
    $('.slider__items').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    });
    
    $('.facts__slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    });

    $('.team__slider-items').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
    });
});
$('.burger-btn').on('click', function(){
        $(this).toggleClass('burger-btn_active');
    });

    $('.burger-btn').on('click', function(){
        $('.burger-menu__list').toggleClass('menu__active ');
    });

    $('.menu__item-link, .logo').on('click', function (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

  

function openCity(evt, cityName) {
var i, tabcontent, tabs__btn;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabs__btn = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabs__btn.length; i++) {
        tabs__btn[i].className = tabs__btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen").style.opacity = "100%";
}
$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Сообщение успешно доставлено!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
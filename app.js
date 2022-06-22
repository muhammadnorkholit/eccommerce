const header = document.querySelector('#header');
const openMenu = document.querySelector('.menu__bars');
const closeMenu = document.querySelector('.close__nav');
const navMenu = document.querySelector('.nav__menu');
const navMenuItem = document.querySelectorAll('.nav__menu li');
const hero = document.querySelector('#hero').offsetTop;
const feature1 = document.querySelector('#feature1').offsetTop;



// console.log($(".nav__menu li").click(() => {
//     alert()
// }))
$(document).ready(() => {
    let scrollCurrentPrev = $(window).scrollTop()

    $(window).scroll(function () {
        const scrollCurrent = $(window).scrollTop()
        if (scrollCurrentPrev > scrollCurrent) {
            $("#header").css("top", "0%")
            $("#header").css("height", "4.5rem")
        } else {
            $("#header").css("top", "-50%")

        }
        scrollCurrentPrev = scrollCurrent


    })

    $(".nav__menu li").click(function () {
        if ($(this).hasClass("close__nav")) return;
        $(".nav__menu li").removeClass("active");
        $(this).addClass("active")
    })

    $(".menu__bars").click(function () {
        $(".nav__menu").addClass("active")
    })
    $(".close__nav").click(function () {
        $(".nav__menu").removeClass("active")
    })

})

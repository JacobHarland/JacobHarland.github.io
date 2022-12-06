window.onload = () => {

// gets current name
const activePage = window.location.pathname;
// loops through each element with data-switcher(nav links) and gets all links associated 
const navLinks = document.querySelectorAll('[data-switcher]').forEach(link => {
    // if link includes the name of our active page, it adds the is-active class
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('is-active');
    }
})
}

//Gallery on homepage
$(document).ready(function () {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        slideWidth: 500,
        slideMargin: 20,
        captions: true,
        speed: 3000,
        pagerType: 'short',
        pagerSelector: '#id_pager'
    });
});


// // Gallery on homepage
// $(document).ready(function() {
//     $('.next').on('click', function() {
//         console.log('clicked')
//         var currentImg = $('.active')
//         var nextImg = currentImg.next();

//         if (nextImg.length) {
//             currentImg.removeClass('active').css('z-index', -10)
//             nextImg.addClass('active').css('z-index', 10)
//         }
//     })

//     $('.prev').on('click', function() {
//         console.log('clicked')
//         var currentImg = $('.active')
//         var prevImg = currentImg.prev();

//         if (prevImg.length) {
//             currentImg.removeClass('active').css('z-index', -10)
//             prevImg.addClass('active').css('z-index', 10)
//         }
//     })
// });

// FAQ page accordion
$(function () {
    $("#accordion").accordion();
});

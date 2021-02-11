var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    mousewheel: true,
    // loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  function startZero(n) {
    return (n<10) ? '0' + n : 'n';
}

var swiperteam = new Swiper('.swiper-container-team', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: true,
    initialSlide:2,
    // init: false,
    navigation: {
        nextEl: '.swiper-button-next-team',
        prevEl: '.swiper-button-prev-team'
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });


const sum = startZero(swiper.slides.length)
document.querySelector('.swiper-container .sum').innerHTML = sum

const teamsum = startZero(swiperteam.slides.length)
document.querySelector('.team-arrows .sum').innerHTML = teamsum

swiper.on('slideChange', function () {
        let active = startZero(swiper.activeIndex + 1)
        document.querySelector('.swiper-container .active').innerHTML = active

        document.querySelector('.active-line').style.width = `calc(100%/${swiper.slides.length - swiper.activeIndex})`
  });


  swiperteam.on('slideChange', function () {
    let activeteam = startZero(swiperteam.activeIndex + 1)
    document.querySelector('.team-arrows .active').innerHTML = activeteam

    document.querySelector('.team-active-line').style.width = `calc(100%/${swiperteam.slides.length - swiperteam.activeIndex})`
});



$(document).ready(function() {

    var teamheight = $('.team-text').height()

    $('.profile').css('height', teamheight)

});

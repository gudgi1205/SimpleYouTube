'use strict'



$(document).ready(function(){
      $('.channel__slider').slick({
        initialSlide: 0,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 300,

        prevArrow: '<svg class="channel__prev-arrow"><use href="assets/images/symbol/sprite.svg#left-arrow"></use></svg>',
        nextArrow: '<svg class="channel__next-arrow"><use href="assets/images/symbol/sprite.svg#right-arrow"></use></svg>',
        responsive: [
            {
              breakpoint: 1480,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
            },
            {
              breakpoint: 690,
              settings: {
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
            }
          ]
      });
});


$(document).ready(function(){
  $('.recommended__slider').slick({
    initialSlide: 0,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
  
    prevArrow: '<svg class="recommended__prev-arrow"><use href="assets/images/symbol/sprite.svg#left-arrow"></use></svg>',
    nextArrow: '<svg class="recommended__next-arrow"><use href="assets/images/symbol/sprite.svg#right-arrow"></use></svg>',
    responsive: [
        {
          breakpoint: 1220,
          settings: {
          slidesToShow: 2,
         }
        },
  
        {
          breakpoint: 770,
          settings: {
              slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
          },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});


$(document).ready(function(){
  $('.recommended-channel__slider').slick({
    initialSlide: 0,
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 3,
  //   arrows: true,
    prevArrow: '<svg class="recommended-channel__prev-arrow"><use href="assets/images/symbol/sprite.svg#left-arrow"></use></svg>',
    nextArrow: '<svg class="recommended-channel__next-arrow"><use href="assets/images/symbol/sprite.svg#right-arrow"></use></svg>',
    responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 690,
          settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
          }
        }
      ]
  });
});






const menuBtn = document.querySelector('.header__menu-btn');
const aside =   document.querySelector('.aside');
const asideText = document.querySelectorAll('.aside__text');
const subs = document.querySelector('.subscriptions');
const user = document.querySelector('.right-pannel__user');
const userModal = document.querySelector('.right-pannel__modal');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')

    for (let i = 0; i < asideText.length; i++) {
      asideText[i].classList.toggle('unNone')
    }

    if (menuBtn.classList.contains('active')) {
      aside.classList.add('resizeAside')
      subs.classList.add('unNone')
      body.classList.add('lock')
    } else {
      aside.classList.remove('resizeAside')
      subs.classList.remove('unNone')
      body.classList.remove('lock')
    }
});


// modal window with user menu
user.addEventListener('click', () => {
    user.classList.toggle('active');

    if (user.classList.contains('active')) {
      userModal.style.right = '20px';
    } else {
      userModal.style.right = '';
    }
    
})
// Mobile menu toggle
const mobileMenu = document.getElementById('mobileNav');
const mobileToggle = document.querySelectorAll('.mobile-nav__button, .close-btn, .mobileMenu__link');
const pageContainer = document.querySelector('body');



function toggleMenu() {
    for (let i = 0; i < mobileToggle.length; i++) {
        mobileToggle[i].addEventListener('click', function(e) {
            if (!mobileMenu.classList.contains('active')) {
                mobileMenu.classList.add('active');
            } else {
                mobileMenu.classList.remove('active');
            }

            if (!pageContainer.classList.contains('pos-fixed_mobile')) {
                pageContainer.classList.add('pos-fixed_mobile');
            } else {
                pageContainer.classList.remove('pos-fixed_mobile');
            }
        });
    }
}

toggleMenu();
// SLIDER
$(document).ready(function(){
  $('.partners__list').slick({
    infinite: true,
    arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
  ]
  });
});
// select all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

// iterate over dropdown elements
dropdowns.forEach(dropdown => {
  // select submenu element within dropdown
  const submenu = dropdown.querySelector('.submenu');
  
  // add event listener for mouseenter event
  dropdown.addEventListener('mouseenter', () => {
    // toggle submenu element
    submenu.classList.toggle('hidden');
  });
  
  // add event listener for mouseleave event
  dropdown.addEventListener('mouseleave', () => {
    // toggle submenu element
    submenu.classList.toggle('hidden');
  });
});

// Banner Slider - SwiperJS - https://codepen.io/ncer/pen/xpqemZ
let menu = ['01', '02', '03', '04']
let mySwiper = new Swiper ('.swiper-container', {
  // If we need pagination
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Burger menu
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const headerNavigation = document.querySelector('.header-navigation');
const body = document.querySelector('body');

burgerMenuIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  headerNavigation.classList.toggle('active');
  body.classList.toggle('disable-scroll');
});

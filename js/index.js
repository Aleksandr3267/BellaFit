let burger = document.querySelector('.header-burger');
let menu = document.querySelector('#main-menu');
let bodyLock = document.querySelector('body');
document.addEventListener('click', burg);
function burg(event) {
  if (event.target.closest('.header-burger')) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
  }
  if (!event.target.closest('.header-burger') & !event.target.closest('.menu')) {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
}
menu.addEventListener('click', function () {
  burger.classList.remove('active');
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
});



new Swiper('.trening-container', {
  autoHeight: true,
  slidesPerGroup: 3,
  slidesPerView: 3,
  pagination: {
    el: ".trening-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
    },
  },
});
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.add('active');
  },
  hide() {
    this.el.classList.remove('active');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();


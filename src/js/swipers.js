import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 16,
  loop: true,
  width: 240,
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 0,
      slidesPerView: 'auto'
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

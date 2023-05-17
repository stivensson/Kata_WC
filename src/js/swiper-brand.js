const brandSpoiler = document.querySelector('.swiper-brand__spoiler')
const brandHeight = document.querySelector('.swiper-brand__slider')

brandSpoiler.addEventListener('click', function () {
  if (brandHeight.classList.contains('swiper-brand_show')) {
    brandHeight.classList.remove('swiper-brand_show')
  } else {
    brandHeight.classList.add('swiper-brand_show')
  }

  if (brandSpoiler.innerText === 'Показать все') {
    brandSpoiler.textContent = 'Скрыть'
  } else if (brandSpoiler.innerText === 'Скрыть') {
    brandSpoiler.textContent = 'Показать все'
  }

  if (brandSpoiler.classList.contains('swiper-brand__spoiler_hidden')) {
    brandSpoiler.classList.remove('swiper-brand__spoiler_hidden')
  } else {
    brandSpoiler.classList.add('swiper-brand__spoiler_hidden')
  }
})

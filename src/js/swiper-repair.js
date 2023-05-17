const repairSpoiler = document.querySelector('.swiper-repair__spoiler')
const repairHeight = document.querySelector('.swiper-repair__slider')

repairSpoiler.addEventListener('click', function () {
  if (repairHeight.classList.contains('swiper-repair_show')) {
    repairHeight.classList.remove('swiper-repair_show')
  } else {
    repairHeight.classList.add('swiper-repair_show')
  }

  if (repairSpoiler.innerText === 'Показать все') {
    repairSpoiler.textContent = 'Скрыть'
  } else if (repairSpoiler.innerText === 'Скрыть') {
    repairSpoiler.textContent = 'Показать все'
  }

  if (repairSpoiler.classList.contains('swiper-repair__spoiler_hidden')) {
    repairSpoiler.classList.remove('swiper-repair__spoiler_hidden')
  } else {
    repairSpoiler.classList.add('swiper-repair__spoiler_hidden')
  }
})

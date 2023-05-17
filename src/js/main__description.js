const spoiler = document.querySelector('.description__spoiler')
const textHeight = document.querySelector('.description__text-wrapper')

spoiler.addEventListener('click', function () {
  if (textHeight.classList.contains('wrapper-height')) {
    textHeight.classList.remove('wrapper-height')
  } else {
    textHeight.classList.add('wrapper-height')
  }

  if (spoiler.innerText === 'Читать далее') {
    spoiler.textContent = 'Скрыть'
  } else if (spoiler.innerText === 'Скрыть') {
    spoiler.textContent = 'Читать далее'
  }

  if (spoiler.classList.contains('description__spoiler-hidden')) {
    spoiler.classList.remove('description__spoiler-hidden')
  } else {
    spoiler.classList.add('description__spoiler-hidden')
  }
})

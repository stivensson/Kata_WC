const burgerMenu = document.querySelector('.burgermenu')
const blurBodyBasic = document.querySelector('.body-wrapper-basic')
const openBurger = document.querySelector('.header-menu__burger')
const closeBurger = document.querySelector('.header-nav__close')

openBurger.addEventListener('click', function () {
  burgerMenu.classList.add('burgermenu-show')
  blurBodyBasic.classList.add('blur-wrapper-basic')
})

document.addEventListener('click', function (e) {
  if (
    e.target === openBurger ||
    e.target === burgerMenu ||
    (burgerMenu.contains(e.target) && e.target != closeBurger)
  ) {
    return
  } else {
    burgerMenu.classList.remove('burgermenu-show')
    blurBodyBasic.classList.remove('blur-wrapper-basic')
  }
  e.stopPropagation()
})

const openModalCallBurger = document.querySelector('.footer-nav__call')
const openModalCallHeader = document.querySelector('.header-menu__call')
const modalCall = document.querySelector('.modal-call')
const closeModalCall = document.querySelector('.modal-call__close')
const blurBody = document.querySelector('.body-wrapper')

document.addEventListener('click', function (e) {
  if (e.target === openModalCallBurger || e.target === openModalCallHeader) {
    modalCall.classList.add('modal-call-show')
    blurBodyBasic.classList.remove('blur-wrapper-basic')
    blurBody.classList.add('blur-body-wrapper')
  }
})

document.addEventListener('click', function (e) {
  if (
    e.target === openModalCallBurger ||
    e.target === openModalCallHeader ||
    e.target === modalCall ||
    (modalCall.contains(e.target) && e.target != closeModalCall)
  ) {
    return
  } else {
    modalCall.classList.remove('modal-call-show')
    blurBody.classList.remove('blur-body-wrapper')
  }
})

const openModalFeedbackBurger = document.querySelector('.footer-nav__chat')
const openModalFeedbackHeader = document.querySelector('.header-menu__chat')
const modalFeedback = document.querySelector('.modal-feedback')
const closeModalFeedback = document.querySelector('.modal-feedback__close')
const blurBodyFeedback = document.querySelector('.body-wrapper')

document.addEventListener('click', function (e) {
  if (
    e.target === openModalFeedbackBurger ||
    e.target === openModalFeedbackHeader
  ) {
    modalFeedback.classList.add('modal-feedback-show')
    blurBodyBasic.classList.remove('blur-wrapper-basic')
    blurBodyFeedback.classList.add('blur-body-wrapper-feedback')
  }
})

document.addEventListener('click', function (e) {
  if (
    e.target === openModalFeedbackBurger ||
    e.target === openModalFeedbackHeader ||
    e.target === modalFeedback ||
    (modalFeedback.contains(e.target) && e.target != closeModalFeedback)
  ) {
    return
  } else {
    modalFeedback.classList.remove('modal-feedback-show')
    blurBodyFeedback.classList.remove('blur-body-wrapper-feedback')
  }
})

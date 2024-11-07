import './style.scss';
import { init } from '/js-module/init';
import { initModal } from './js-module/modal';
import { initNav } from './js-module/nav';
import { initSmoothScroll } from './js-module/smoothscroll';
import { initPopup } from './js-module/popup';
import { initSlider } from './js-module/sliders';



window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  init();
  initModal();
  initNav();
  initSmoothScroll();
  initPopup();
  initSlider();


  // DOMContentLoaded
});
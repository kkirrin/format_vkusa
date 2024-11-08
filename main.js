import './style.scss';
import { init } from '/js-module/init';
import { initNav } from './js-module/nav';
import { initTabs } from './js-module/tabs';
import { initModal } from './js-module/modal';
import { initPopup } from './js-module/popup';
import { initHeaderFix } from './js-module/header-fix';
import { initSlider, initPopularSlider, initPromotionSlider, initRecipesSlider } from './js-module/sliders';



window.addEventListener('DOMContentLoaded', () => {
  console.log('подключен скрипт main.js');

  init();
  initNav();
  initTabs();
  initModal();
  initPopup();
  initSlider();
  initHeaderFix();
  initPopularSlider();
  initRecipesSlider();
  initPromotionSlider();


  // DOMContentLoaded
});
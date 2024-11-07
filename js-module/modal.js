export const initModal = () => {
 const modalButtons = document.querySelectorAll('.modal_btn');
 const body = document.querySelector('body');

 modalButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
   const currentBtn = e.currentTarget;
   const modalWrapper = currentBtn.closest('.modal_wrapper');
   const modalContent = modalWrapper.querySelector('.modal_content');

   if (modalContent.classList.contains('is-active')) {
    return;
   } else {
    modalContent.classList.add('is-active');
    body.classList.add('masked');
   }
  });
 });

 document.addEventListener('click', (event) => {
  if (!event.target.closest('.modal') && !event.target.closest('.modal_btn')) {
   const modalContent = document.querySelectorAll('.modal_content');
   modalContent.forEach((content) => {
    content.classList.remove('is-active');
   });
   document.body.classList.remove('masked');
  }
 });
};

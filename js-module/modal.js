export const initModal = () => {
    const modalBtn = document.querySelector('.modal_btn_lk');
    const modalLk = document.querySelector('.modal__content_lk');

    const modalBtnCart = document.querySelector('.modal_btn_cart');
    const modalCart = document.querySelector('.modal__content_cart');

    modalBtn.addEventListener('click', () => {
        modalLk.classList.toggle('is-open');
    });

    modalBtnCart.addEventListener('click', () => {
        modalCart.classList.toggle('is-open');
    });
}
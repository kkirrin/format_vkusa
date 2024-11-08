export const initHeaderFix = () => {
    const header = document.querySelector('header .fixed');
    const clearDiv = document.querySelector('header .able');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        if (scrollTop >= 50) {
            header.classList.add('header-fix');
            clearDiv.classList.add('disabled');
        } else {
            header.classList.remove('header-fix');
            clearDiv.classList.remove('disabled');
        }
    });
}
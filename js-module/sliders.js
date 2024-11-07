export const initSlider = () => {
    const item = document.querySelector('.main-item');
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                autoplay: {
                    delay: 3000
                },
                speed: 3000,
                // effect: "fade",
                // direction: 'vertical',
                
                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                  },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
}

export const initPopularSlider = () => {
    const item = document.querySelector('.popular-item');

    console.log(item)
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                autoplay: {
                    delay: 3000
                },
                speed: 3000,
                // effect: "fade",
                // direction: 'vertical',
                
                spaceBetween: 15,
                slidesPerView: 1,
                equalHeight: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                  },

                navigation: {
                    nextEl: '.swiper-popular-next',
                    prevEl: '.swiper-popular-prev',
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    695: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                    }
                }
            });
        }
}
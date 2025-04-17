const SwiperConfig = {
    loop: true,
    spaceBetween: 100,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}

const swiper1 = new Swiper('.swiper1', {
  ...SwiperConfig,
  centeredSlides: true,
  slidesPerView: 3,
})

const swiper2 = new Swiper('.swiper2', {
  ...SwiperConfig,
  slidesPerView: 2,
  centeredSlides: false,
  slidesPerGroup: 2
})

  let lastScrollTop = 0;
   const header = document.querySelector('header');
   const headerHeight = header.offsetHeight;
   
   window.addEventListener('scroll', function() {
     const scrollTop = window.scrollY;
     
     if (scrollTop > lastScrollTop) {
       // Прокрутка вниз
       header.classList.add('hidden');
     } else {
       // Прокрутка вверх
       header.classList.remove('hidden');
     }
     
     lastScrollTop = scrollTop;
   });
  
  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

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
  
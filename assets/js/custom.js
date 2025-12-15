$('.banner-content-main').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.testimonial-slider-wrap').slick({
  dots: true,
  infinite: true,
  arrows:false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


$('.brand-inner-logo').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 6,
    autoplay:true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      }
    ]
  });

  $('.main-project-slide-row').slick({
   
    centerPadding: '0',
    slidesToShow: 4,
    arrows:true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-title");
  
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const numberEl = counter.querySelector(".number");
      let current = 0;
  
      const updateCounter = () => {
        const increment = target / 60;
  
        if (current < target) {
          current = Math.ceil(current + increment);
          numberEl.innerText = current;
          setTimeout(updateCounter, 30);
        } else {
          numberEl.innerText = target; // number final
        }
      };
  
      updateCounter();
    });
  });
  

  // Hamburger toggle
document.querySelector('.button-toggle-nav')?.addEventListener('click', function () {
  const header = this.closest('.header-inner-row');
  const menu = header?.querySelector('.navigation-header');
  const parent_menu = header?.querySelector('.button-toggle-nav');

  parent_menu?.classList.toggle('active');
  menu?.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});



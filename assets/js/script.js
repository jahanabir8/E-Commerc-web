// mobile menu
$(".menu__icon").click(function(){
    $(".mobile__menu").addClass("open");
  })


$(".cross__btn").click(function(){
    $(".mobile__menu").removeClass("open");
  })


// banner swiper

var swiper = new Swiper(".banner__swiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // autoplay: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// gallery swiper

var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  // loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    
    1024: {
      slidesPerView: 4,
      // spaceBetween: 40,
      // slidesPerColumn: 4,
    },
    768: {
      slidesPerView: 3,
      // spaceBetween: 30,
      // slidesPerColumn: 3,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 20,
      // slidesPerColumn: 2,
    },
    320: {
      slidesPerView: 1,
      // spaceBetween: 10,
      // slidesPerColumn: 1,
    }
    

  }


});

// tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


// customers review
var swiper = new Swiper(".review__Swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
  autoplay: 
    {
      delay: 2000,
    }
});
    
// footer swiper
var swiper = new Swiper(".footer__swiper", {
  slidesPerView: 7,
  // spaceBetween: 20,
  slidesPerGroup: 1,
  // loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  autoplay: 
    {
      delay: 2000,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    
    1024: {
      slidesPerView: 6
    },
    768: {
      slidesPerView: 4
    },
    575: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 3
    }
    

  }


});


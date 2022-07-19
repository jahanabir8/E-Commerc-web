
// ====================================================
// 		    NAVBAR MEGA MENU JS
// ====================================================
$(".mega-menu-item").hover(function() {
	let key = $(this).data('key');
    $(this).find('.mega__menu'+key).removeClass('d-none');
}, function() {
    $('.mega__menu').addClass('d-none');
});




// ====================================================
// 		    SEARCH BOX TOGGLE JS
// ====================================================
$("#search_btn").click(function() {
    $('#search_box').toggle();
});
$("#close_btn").click(function() {
    $('#search_box').hide();
});

// search-box




// mobile menu
$(".menu__icon").click(function(){
    $(".mobile__menu").addClass("open");
  })


$(".cross__btn").click(function(){
    $(".mobile__menu").removeClass("open");
  })



// modal




// banner swiper

var swiper = new Swiper(".banner__swiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  autoplay: 
  {
    delay: 3000
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
});





// gallery swiper

var swiper = new Swiper(".gallery__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  autoplay: 
  {
    delay: 9000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    
    1024: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    575: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
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
  slidesPerGroup: 1,
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
    breakpoints: {
      1024: {
        slidesPerView: 7
      },
      768: {
        slidesPerView: 4
      },
      575: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
    

  })




// product dets 
var swiper = new Swiper(".myproduct", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".myproduct2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });




// increament
$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});



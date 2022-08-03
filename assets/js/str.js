// let zoomer = function (){
//     document.querySelector('#img-zoomer-box')
//       .addEventListener('mousemove', function(e) {
        
  
//       let original = document.querySelector('#img-1'),
//           magnified = document.querySelector('#img-2'),
//           style = magnified.style,
//           x = e.pageX - this.offsetLeft,
//           y = e.pageY - this.offsetTop,
//           imgWidth = original.offsetWidth,
//           imgHeight = original.offsetHeight,
//           xperc = ((x/imgWidth) * 100),
//           yperc = ((y/imgHeight) * 100);
//           console.log( original.offsetHeight)
//       //lets user scroll past right edge of image
//       if(x > (.01 * imgWidth)) {
//         xperc += (.15 * xperc);
//       };
  
//       //lets user scroll past bottom edge of image
//       if(y >= (.01 * imgHeight)) {
//         yperc += (.15 * yperc);
//       };
  
//       style.backgroundPositionX = (xperc - 9) + '%';
//       style.backgroundPositionY = (yperc - 9) + '%';
  
//       style.left = (x - 200) + 'px';
//       style.top = (y - 200) + 'px';
  
//     }, false);
//   }();


// blog menu
$(".blogHeader__menu").click(function(){
  $(".blog__mobile__menu").addClass("blog__open");
})


$(".blog__cross__bar").click(function(){
  $(".blog__mobile__menu").removeClass("blog__open");
})
// blog menu


  
  // ========related product slider
  var swiper = new Swiper(".related__swiper", {
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

  // new blog ban swiper
  var swiper = new Swiper(".blog__Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      
      1024: {
        slidesPerView: 3
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

// wishlist swiper
var swiper = new Swiper(".wishlist__Swiper", {
  slidesPerView: 5,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


  breakpoints: {
    1399:{
      slidesPerGroup: 4
    },
      
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


$(".accordion-body").click(function(){
  $(".country__form").addClass("open__form");
})


$(".accordion__cross").click(function(){
  $(".country__form").removeClass("open__form");
})
let zoomer = function (){
    document.querySelector('#img-zoomer-box')
      .addEventListener('mousemove', function(e) {
  
      let original = document.querySelector('#img-1'),
          magnified = document.querySelector('#img-2'),
          style = magnified.style,
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          imgWidth = original.offsetWidth,
          imgHeight = original.offsetHeight,
          xperc = ((x/imgWidth) * 100),
          yperc = ((y/imgHeight) * 100);
  
      //lets user scroll past right edge of image
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      };
  
      //lets user scroll past bottom edge of image
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      };
  
      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';
  
      style.left = (x - 180) + 'px';
      style.top = (y - 180) + 'px';
  
    }, false);
  }();

  
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
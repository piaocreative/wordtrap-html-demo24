$( document ).ready( function() {

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });   
  }

  if ( $('.top-product-slick' ).length ) {
    $('.top-product-slick').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.top-product-prev'),
      nextArrow: $('.top-product-next'),
      responsive: [
        {
          breakpoint: 1620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });   

    $(".top-product-slick").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".top-product-pages").children(".current").text("0"+i);
  });
  }

  if ( $('.portfolios' ).length ) {
    $('.portfolios').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode:true,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
          }
        }
      ]
    });  

    $(".portfolios").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".portfolio-pages").children(".current").text("0"+i);
    });
  }

  if ( $('.posts' ).length ) {
    $('.posts').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });   

    $(".post-prev").click(function(e) {
      e.preventDefault();
      $('.posts').slick('slickPrev');
    })
    
    $(".post-next").click(function(e) {
      e.preventDefault();
      $('.posts').slick('slickNext');
    })

    $(".posts").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".post-pages").children(".current").text("0"+i);
    });
  }

  $('.discounts').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.discount-prev'),
    nextArrow: $('.discount-next'),
  });

  $(".discounts").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".discount-pages").children(".current").text("0"+i);
  });

  $('.new-products').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.new-product-prev'),
    nextArrow: $('.new-product-next'),
  });

  $(".new-products").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".new-product-pages").children(".current").text("0"+i);
  });


  $('.bestsellers').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.bestseller-prev'),
    nextArrow: $('.bestseller-next'),
  });

  $(".bestsellers").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".bestsellers-pages").children(".current").text("0"+i);
  });

  $('.inspires').slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.inspires-prev'),
    nextArrow: $('.inspires-next'),
  });

  $(".inspires").on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(".inspires-pages").children(".current").text("0"+i);
  });

});
$(document).ready(function() {
  // load image
  $(function(){

    $('.progressive-image').each(function(){

      var image = new Image();
      var previewImage = $(this).find('.loadingImage');
      var newImage = $(this).find('.overlay');
      var info = $(this).find('.main-banner--info');

      image.onload = function(){
        newImage.css('background-image', 'url(' + image.src + ')');
        newImage.css('opacity', '1');
        info.css('opacity', '1');

        console.log('complete');
      };

      image.src = previewImage.data('image');

    });

  }); // end load image

  // header
  var sections = $('section'),
  nav = $('nav'),
  header = $('header'),
  nav_height = nav.outerHeight();
  header_height = header.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - header_height + 2,
      bottom = top + $(this).outerHeight();
      // console.log(nav_height);

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this),
    id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - header_height +10
    }, 500);

    return false;
  }); // end header

  // logo scroll to top
  var toTop = $('.logo');
  // logic
  toTop.on('click', function() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    });
  });

  // nav mobile menu
  $('.mobile-nav').click(function() {
    $(this).toggleClass("active");
    $("header").toggleClass("is-open");
    $("body").toggleClass("overflow-hidden");
  });
  
  // Slider vision
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // gallery slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });




}); // end document ready

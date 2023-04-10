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
  // variables
    var toTop = $('.logo');
    // logic
    toTop.on('click', function() {
      $('html, body').animate({
        scrollTop: $('html, body').offset().top,
      });
    });


}); // end document ready

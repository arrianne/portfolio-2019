$( document ).ready(function() {

    console.log("hello");


    // should start at 0

    $('.burger-menu').click(function(){
      $(this).toggleClass('active');
      $(".header").toggleClass("header-active");
      return false;
    });

  $('.title-box').scroll(function() {
      console.log('Event Fired');
      $(this).css({
        'width' : '100%',
        'transition' : '0.4s'
      });
    });

//keeping the burger menu at the top
    var $nav = $('.burger-menu'),
      posTop = $nav.position().top;
  $(window).scroll(function () {
    console.log("hiiii")
    var y = $(this).scrollTop();
    if (y > posTop) { $nav.addClass('fixed'); }
    else { $nav.removeClass('fixed'); }
  });

});

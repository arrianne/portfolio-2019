$( document ).ready(function() {

    console.log("hello");

    // Adding background to burger menu on scroll

    $(window).scroll(function(){
      	var scroll = $(window).scrollTop();
    	  if (scroll > 300) {
    	    $(".burger-menu_container").css("background" , "#36c9c6");
    	  }
    	  else{
    		  $(".burger-menu_container").css("background" , "none");
    	  }
      })

    // should start at 0

    $('.burger-menu').click(function(){
      $(this).toggleClass('active');
      $(".header").toggleClass("header-active");
      return false;
    });

  $('.title-box').scroll(function() {
      $(this).css({
        'width' : '100%',
        'transition' : '0.4s'
      });
    });



  $(window).scroll(function(){
      // Function used to detect if the element is scrolled into view
      function elementScrolled(elem)
      {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top;
          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }

      // skill level - css
      if(elementScrolled('.css')) {
        console.log('Event Fired');
          $('.css').stop().animate({height: "90%"},400,"swing");
          $('.html').stop().animate({height: "60%"},400,"swing");
          $('.javascript').stop().animate({height: "80%"},400,"swing");
          $('.adobe').stop().animate({height: "40%"},400,"swing");

      } else {
          $('.css').stop().animate({height: "0%"},400,"swing");
          $('.html').stop().animate({height: "0%"},400,"swing");
          $('.css').stop().animate({height: "0%"},400,"swing");
          $('.html').stop().animate({height: "0%"},400,"swing");

      }

  });




});

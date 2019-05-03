$( document ).ready(function() {

    console.log("hello");


    // should start at 0

    $('.burger-menu').click(function(){
      $(this).toggleClass('active');
      return false;
    });

});

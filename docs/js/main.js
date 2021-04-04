$(function () {
  //////menu
	// $('.menu__btn').on("click", function(){
  //   $(this).toggleClass('open');
  //   $('.menu__list').toggle(700);    
  // });
  
 
  var $toggleButton = $('.menu__btn'),
        $menuWrap = $('.menu__list');
    $toggleButton.on('click', function() {
        $(this).toggleClass('open');
        $menuWrap.toggleClass('menu-show');
    });


  //slider
  $('.gallery__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2, 
    autoplay: true,
    arrows: false,
    dots: false,
    
  });
  ////tabs///////
  $('.use__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.use__wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.use__wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
  });
  
  //////accordion//////////

    $(".accordion-items .accordion__title").on('click', function() {
      $(this).parent().find("div.accordion-text").slideToggle('slow');
      $(this).find('.hidden').toggleClass('active');      
    });
  
    
 


    

  /////////////////input//////////////
  $('input[type="file"], select').styler();   
 
  
  
});

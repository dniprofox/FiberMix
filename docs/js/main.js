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

    // $(".accordion-items .accordion__title").on('click', function() {
    //   $(this).parent().find("div.accordion-text").slideToggle('slow');
    //   $(this).find('.hidden').toggleClass('active');
      
    // }); 
  
    var accordeon = document.querySelectorAll(".accordion__title")[0];
var plus = document.querySelectorAll(".accordion__title img")[0];
var minus = document.querySelectorAll(".accordion__title img")[1];

plus.addEventListener("click", function() {
if (plus.classList.contains("icon_active"))
{
   plus.classList.remove("icon_active");
   plus.classList.add("icon__hidden");
   minus.classList.add("icon_active");
}
else
{
   plus.classList.remove("icon__hidden");
   plus.classList.add("icon_active");
   minus.classList.remove("icon_active");
}
});

minus.addEventListener("click", function() {
if (minus.classList.contains("icon_active"))
{
   minus.classList.remove("icon_active");
   plus.classList.add("icon_active");
}
else
{
   minus.classList.add("icon_active");
}
});

var accordeon = document.querySelectorAll(".accordion__title")[1];
var plus = document.querySelectorAll(".accordion__title img")[0];
var minus = document.querySelectorAll(".accordion__title img")[1];

plus.addEventListener("click", function() {
if (plus.classList.contains("icon_active"))
{
   plus.classList.remove("icon_active");
   plus.classList.add("icon__hidden");
   minus.classList.add("icon_active");
}
else
{
   plus.classList.remove("icon__hidden");
   plus.classList.add("icon_active");
   minus.classList.remove("icon_active");
}
});

minus.addEventListener("click", function() {
if (minus.classList.contains("icon_active"))
{
   minus.classList.remove("icon_active");
   plus.classList.add("icon_active");
}
else
{
   minus.classList.add("icon_active");
}
});

var accordeon = document.querySelectorAll(".accordion__title")[2];
var plus = document.querySelectorAll(".accordion__title img")[0];
var minus = document.querySelectorAll(".accordion__title img")[1];

plus.addEventListener("click", function() {
if (plus.classList.contains("icon_active"))
{
   plus.classList.remove("icon_active");
   plus.classList.add("icon__hidden");
   minus.classList.add("icon_active");
}
else
{
   plus.classList.remove("icon__hidden");
   plus.classList.add("icon_active");
   minus.classList.remove("icon_active");
}
});

minus.addEventListener("click", function() {
if (minus.classList.contains("icon_active"))
{
   minus.classList.remove("icon_active");
   plus.classList.add("icon_active");
}
else
{
   minus.classList.add("icon_active");
}
});
    

  /////////////////input//////////////
  $('input[type="file"], select').styler();   
 
  
  
});

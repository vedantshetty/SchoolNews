$(document).on('turbolinks:load', function(){
$(document).ready(
  setTimeout(function(){
    $(".preloader-wrapper").css("display",'none');
    $('.content').css("display",'block');
  }, 2000)
);


$('.footer .category').click(function(){
  $('.rotate').toggleClass('down');
  $('#footer-categories').slideToggle(200,'linear');
})


})
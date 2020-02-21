$(document).on('turbolinks:load', function(){
$(document).ready(
  setTimeout(function(){
    $(".preloader-wrapper").css("display",'none');
    $('.content').css("display",'block');
  }, 2000)
);


$('.rotate').click(function(){
  $(this).toggleClass('down');
  $('#footer-categories').slideToggle(500,'linear');
})


})
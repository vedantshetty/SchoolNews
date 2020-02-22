$(document).on('turbolinks:load', function(){
$(document).ready(
  setTimeout(function(){
    $(".preloader-wrapper").css("display",'none');
    $('.content').css("display",'block');
  }, 2000)
);


// Bottom drawer open-close
$('.footer .category').click(function(){
  $('.rotate').toggleClass('down');
  $('#footer-categories').slideToggle(200,'linear');
});

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  //scroll up
  if(prevScrollPos>currentScrollPos) {
    $('.footer').removeClass('out');
  }
  //scroll down
  else {
    $('.footer').addClass('out');
  }
  prevScrollPos = currentScrollPos;
}

})

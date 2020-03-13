// Sticky title on single post UI
$(document).on('turbolinks:load', function(){
  window.onscroll = function(){
    let title = $('.post-title')[0];
    let position = title.offsetTop;
    if(window.pageYOffset > position+35) {
        title.classList.add("sticky");
        $('.back').fadeIn();
      }
      else {
        title.classList.remove("sticky");
        $('.back').fadeOut();
      }
  };
})


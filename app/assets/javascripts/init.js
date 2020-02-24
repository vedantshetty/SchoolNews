
$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
  
    $('.sidenav').sidenav({
      'onOpenStart': function(){
        $('.rotate').removeClass('down');
        $('#footer-categories').slideUp(200,'linear');
      }
    });

    $('.fixed-action-btn').floatingActionButton();
})
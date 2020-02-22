

$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
    $('select').formSelect();
  
    $('.sidenav').sidenav({
      'onOpenStart': function(){
        $('.rotate').removeClass('down');
        $('#footer-categories').slideUp(200,'linear');
      }
    });

    $('.carousel').carousel({
      numVisible:'4'
    });

    $('.fixed-action-btn').floatingActionButton();
})
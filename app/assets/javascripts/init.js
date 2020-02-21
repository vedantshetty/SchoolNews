

$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
    $('select').formSelect();
  
    $('.sidenav').sidenav({
    });

    $('.carousel').carousel({
      numVisible:'4'
    });

    $('.fixed-action-btn').floatingActionButton();
})
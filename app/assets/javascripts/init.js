
$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
  
  $('.sidenav').sidenav({
    edge: 'right',
    draggable:'false',
  });
    $('.fixed-action-btn').floatingActionButton();
})
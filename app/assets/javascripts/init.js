

$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false,
    'constrainWidth': false
  });
    $('select').formSelect();
  
    $('.sidenav').sidenav({
      'edge': 'right'
    });
})
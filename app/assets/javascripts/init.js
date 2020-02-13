

$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
    $('select').formSelect();
  
    $('.sidenav').sidenav({
      'edge': 'right'
    });
})
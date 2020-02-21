

$(document).on('turbolinks:load', function(){
  $('.dropdown-trigger').dropdown({
    'coverTrigger': false
  });
    $('select').formSelect();
  
    $('.sidenav').sidenav({
    });

    $('.carousel').carousel({
      'dist': '-20',
      'numVisible': 5
    });

    console.log($(window).width()/200)

    $('.fixed-action-btn').floatingActionButton();
})
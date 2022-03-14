window.onload = function() {
    console.log('Loaded Site');
};



$(document).ready(function() {
    $('li.nav-item.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li.nav-item').addClass('active'); 
  });

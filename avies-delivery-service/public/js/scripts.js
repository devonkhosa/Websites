window.onload = function() {
    console.log('Loaded Site');
};

//Makes current page active on navbar
$(document).ready(function() {
    $('li.nav-item.active').removeClass('active');
    $('a[href="' + location.pathname + '"]').closest('li.nav-item').addClass('active'); 
  });

$('#confirmationModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
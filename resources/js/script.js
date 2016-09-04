/* blur on modal open, unblur on close */
$('#diamond').on('show.bs.modal', function () {
   $('.content').addClass('blur');
})

$('#diamond').on('hide.bs.modal', function () {
   $('.content').removeClass('blur');
})
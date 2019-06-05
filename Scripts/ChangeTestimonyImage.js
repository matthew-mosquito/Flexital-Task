// external js: flickity.pkgd.js

$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
});

var $carousel = $('.carousel').flickity();

$('.button-group').on('click', '.button', function () {
    var index = $(this).index();
    $carousel.flickity('select', index);
});
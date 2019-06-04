var flkty = new Flickity('.carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);

buttonGroup.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);
});
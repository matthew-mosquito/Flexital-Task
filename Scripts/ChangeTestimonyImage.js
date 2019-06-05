// external js: flickity.pkgd.js


//Initialise The Carousel's features
$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
});

// Allow buttons to change the carousel
var $carousel = $('.carousel').flickity();

$('.button-group').on('click', '.button', function () {
    var index = $(this).index();
    $carousel.flickity('select', index);
});

// Change greyscale and stack order of image.
// Selected image will have higher stack. Unselected image will be greyed

// Hold both medical women images in variable
const medicalWomanImages = document.querySelectorAll(".medical-woman");

// Add event listener for each of the images, Invoke function
for (const image of medicalWomanImages) {
    image.addEventListener('click', frontImageGreyOther);
}

// Function to shift stack of clicked image to front
// Then greyscale the other image to 100%

function frontImageGreyOther( e ) {

    console.log("testing");
    console.log(e.target.id);


    const medicalWomanImages = document.querySelectorAll(".medical-woman");

    for (const image of medicalWomanImages) {


        if (e.target.id == image.id) {
            e.target.classList.remove("img-selected");
            e.target.classList.remove("img-unselected");
            e.target.classList.add("img-selected");
        }

        else {
            image.classList.remove("img-selected");
            image.classList.remove("img-unselected");
            image.classList.add("img-unselected");
        }
    }
};

// function

// external js: flickity.pkgd.js


//Initialise The Carousel's features
$('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    draggable: false
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


// grab the two dots of the quote carousel
const dots = document.querySelectorAll(".dot");

// add event listeners to both of them
// invoke function to change images if dot is clicked.
for (const dot of dots) {
    dot.addEventListener('click', changeImageFromDot);
};



function changeImageFromDot(e) {

    // grab the the two images in separate variables
    const firstMedicalWoman = document.getElementById("first");
    const secondMedicalWoman = document.getElementById("second");

    // remove previous class attributes so they don't add up each time somebody clicks
    firstMedicalWoman.classList.remove("img-selected");
    firstMedicalWoman.classList.remove("img-unselected");

    secondMedicalWoman.classList.remove("img-selected");
    secondMedicalWoman.classList.remove("img-unselected");

    // if it's the first dot, add styling to first image, remove from second
    if (this.getAttribute("aria-label") == "Page dot 1") {

        firstMedicalWoman.classList.add("img-selected");
        secondMedicalWoman.classList.add("img-unselected");
    };

    // if it's the second dot, add styling to second image, remove from first
    if (this.getAttribute("aria-label") == "Page dot 2") {

        secondMedicalWoman.classList.add("img-selected");
        firstMedicalWoman.classList.add("img-unselected");
    };
};
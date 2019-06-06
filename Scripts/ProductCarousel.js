// Get Entire carousel for event listener

const carousel = document.querySelector(".product-carousel");

// Get all the products for testing presence of is-selected class attribute

const allProducts = document.querySelectorAll(".product-carousel-cell");

// Add event listener to fire off function for changing opacity
// if anywhere on the entire carousel is clicked

carousel.addEventListener("click", addAndRemoveCaptions);

// invoke function when page loads
window.onload = addAndRemoveCaptions;

// function to addAndRemoveCaptions

function addAndRemoveCaptions( event ) {

    // Loop through each product
    for (const product of allProducts) {

        // get the child div node of the product cell
        var captionDiv = product.getElementsByTagName("DIV")[0];

        var image = product.getElementsByTagName("IMG")[0];

        // test if it has the is-selected class
        if (product.classList.contains("is-selected")) {

            // remove previously added 'opacity on' class to avoid them stacking up
            captionDiv.classList.remove("op-1");
            // remove 'opacity off' class
            captionDiv.classList.remove("op-0");
            // add "opacity on" class
            captionDiv.classList.add("op-1");

            //Change image size
            //remove width-100 class
            image.classList.remove("w-100");
            //remove width-90 class
            image.classList.remove("w-90");
            //add width 100 class
            image.classList.add("w-100");
        }

        else {

            // remove previously added "opacity off" class
            captionDiv.classList.remove("op-0");
            // remove 'opacity on' class
            captionDiv.classList.remove("op-1");
            // add "opacity off" class
            captionDiv.classList.add("op-0")

            //Change image size
            //remove width-90 class
            image.classList.remove("w-90");
            //remove width-100 class
            image.classList.remove("w-100");
            //add width 90 class
            image.classList.add("w-90");
        }
    };
};
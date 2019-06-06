var flkty = new Flickity('.product-carousel', {
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    wrapAround: true
});

// Add an event listener for somebody click on the carousel, then get the product-carousel-cell
// which has the is-selected class attribute added to it. Append items in if not already there.
// Try to remove from the previous and post item using Ids.

// Call function to add caption on load

window.onload = addCaption;

// Grab the carousel
var productCells = document.querySelectorAll(".product-carousel");

// Add event listeners

for (var cell of productCells) {
    cell.addEventListener('click', addCaption);
}

// function to add caption

function addCaption( event ) {
    console.log("testing product-cell click");

    // Get the selected item
    selectedCell = document.querySelector(".is-selected");

    if (selectedCell.childNodes.length > 3) {
        return;
    };

    if (selectedCell.id == "product-02") {
        selectedCell.innerHTML += '<h1>Moisturising Foot Foam</h1>';
        selectedCell.innerHTML += '<p>Fast acting and intensive treatment for very rough or dry skin</p>';
        selectedCell.innerHTML += '<a href="#" class="submit-btn btn" role="button">Learn more</a>';
    }

    else if (selectedCell.id == "product-03") {
        selectedCell.innerHTML += '<h1> Moisturising Foot Cream</h1>';
        selectedCell.innerHTML += '<p>Enriched with Vitamin E, and Contains 10% Urea, in a richand highly concentrated base, to soften and hydrate very dry skin</p>';
        selectedCell.innerHTML += '<a href="#" class="submit-btn btn" role="button">Learn more</a>';
    }
    else {
        selectedCell.innerHTML += '<h1>Flexitol Heel Balm</h1>';
        selectedCell.innerHTML += '<p>Highly effective medically proven skin nourishing treatment for dry and cracked feet, visible results in just one day</p>';
        selectedCell.innerHTML += '<a href="#" class="submit-btn btn" role="button">Learn more</a>';
    };
};


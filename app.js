// Init ratings
const ratings = {
    android: 4.7,
    iphone: 3.5,
    windows: 2.3,
    blackBerry: 3.6,
    huawei: 3.2
}

// Total stars
const starsTotal = 5;

// Run getRatings when DOM starts
document.addEventListener("DOMContentLoaded", getRatings);

// Form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// init product
let product;

// product select change
productSelect.addEventListener("change", (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

// Rating Control change
ratingControl.addEventListener("blur", (e) => {
    const rating = e.target.value;

    // check if 5 or under
    if(rating > 5){
        alert("Please rate 1 - 5");
        return;
    }

    // Change rating 
    ratings[product] = rating;

    getRatings();
});

// Get ratings
function getRatings(){
    for(let rating in ratings){
        // get percentage
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // Set width of stars-inner to percentage
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .nb-rating`).innerHTML = ratings[rating];
    }
}
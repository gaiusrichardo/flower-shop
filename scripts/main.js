// categorize product by rating
let checkRatingCategory = document.getElementById('rating-star')
let starsRatingCategory = document.getElementById('stars-rate')
let stars = starsRatingCategory.children

let starOne;
let starTwo;
let starThree;
let starFour;
let starFive;

for(let i = 0; i < stars.length; i++) {
    starOne = stars[0]
    starTwo = stars[1]
    starThree = stars[2]
    starFour = stars[3]
    starFive = stars[4]
}

// create a function which changes every star color on click
let isStarRateSelected = false;
const selectedStar = (star, condition, conditionTwo) => {
    star.src = "./assets/imgs/icons/full-rating.png"

    if(condition === starTwo) {
        starOne.src = "./assets/imgs/icons/full-rating.png"
    } 
    else if(condition === starThree) {
        starOne.src = "./assets/imgs/icons/full-rating.png"
        starTwo.src = "./assets/imgs/icons/full-rating.png"
    }
    else if(condition === starFour) {
        starOne.src = "./assets/imgs/icons/full-rating.png"
        starTwo.src = "./assets/imgs/icons/full-rating.png"
        starThree.src = "./assets/imgs/icons/full-rating.png"
    }
    else if(condition === starFive) {
        starOne.src = "./assets/imgs/icons/full-rating.png"
        starTwo.src = "./assets/imgs/icons/full-rating.png"
        starThree.src = "./assets/imgs/icons/full-rating.png"
        starFour.src = "./assets/imgs/icons/full-rating.png"
    }
}

// check if a star was clicked ahead of the other and then fill it

starOne.addEventListener('click', selectedStar.bind(this, starOne))
starTwo.addEventListener('click', selectedStar.bind(this, starTwo, starTwo))
starThree.addEventListener('click', selectedStar.bind(this, starThree, starThree))
starFour.addEventListener('click', selectedStar.bind(this, starFour, starFour))
starFive.addEventListener('click', selectedStar.bind(this, starFive, starFive))
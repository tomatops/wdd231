// REVIEWS
import { reviews } from "../data/reviews.mjs";

const cards = document.querySelector("#review-cards");

const displayReviews = (reviews) => {
    reviews.forEach((review) => {
        let card = document.createElement('section');
        let comment = document.createElement('h3');
        let reviewer = document.createElement('address');
        let rating = document.createElement('p');

        reviewer.textContent = review.reviewer;
        rating.textContent = review.rating
        comment.textContent = review.comment;

        card.appendChild(rating);
        card.appendChild(comment);
        card.appendChild(reviewer);

        cards.appendChild(card);
    });
}

displayReviews(reviews.reviews);

// NUMBER OF VISITS
const displayVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    displayVisits.textContent = numVisits;
} else {
    displayVisits.textContent = `Welcome to ThinkPalace!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
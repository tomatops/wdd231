import { areaInterest } from "../data/interest.mjs";

const cards = document.querySelector("#cards");

const displayAreas = (areas) => {
    areas.forEach((area) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('image');
        let address = document.createElement('p');
        let description = document.createElement('p');
        let button = document.createElement('button');

        name.textContent = area.name;
        address.textContent = area.address;
        description.textContent = area.description;

        image.setAttribute('src', area.image);
        image.setAttribute('alt', area.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        button.textContent = "Learn More";
        button.className = "learn-more";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

displayAreas(areaInterest.areas);
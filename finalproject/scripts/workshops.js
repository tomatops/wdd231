const url = "data/workshops.json";

const all = document.querySelector("#all");
const arts = document.querySelector("#arts");
const design = document.querySelector("#design");
const business = document.querySelector("#business");
const tech = document.querySelector("#tech");
const wellness = document.querySelector("#wellness");
const cards = document.querySelector("#cards");

// WORKSHOP CARDS
const displayWorkshops = (workshops) => {
    cards.innerHTML = "";

    workshops.forEach((workshop) => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let instructor = document.createElement("p");
        let sessions = document.createElement("p");
        let session_duration = document.createElement("p");
        let price = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = workshop.name;

        instructor.textContent = workshop.instructor;
        instructor.setAttribute("id", "instructor");

        sessions.innerHTML = `${workshop.sessions} sessions`;
        sessions.setAttribute("id", "sessions");

        session_duration.innerHTML = workshop.session_duration;
        session_duration.setAttribute("id", "session-duration");

        price.innerHTML = workshop.price;
        price.setAttribute("id", "price");

        image.setAttribute("src", workshop.image);
        image.setAttribute("alt", `${workshop.category} image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "270");
        image.setAttribute("height", "150");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(instructor);
        card.appendChild(sessions);
        card.appendChild(session_duration);
        card.appendChild(price);

        cards.appendChild(card);
    });
}

async function getWorkshopData() {
    const response = await fetch(url);
    const workshops = (await response.json()).workshops;

    displayWorkshops(workshops);

    all.addEventListener("click", () => displayWorkshops(workshops));
    arts.addEventListener("click", () => displayWorkshops(workshops.filter(workshop => workshop.category === "Creative Arts")));
    design.addEventListener("click", () => displayWorkshops(workshops.filter(workshop => workshop.category === "Design")));
    business.addEventListener("click", () => displayWorkshops(workshops.filter(workshop => workshop.category === "Business")));
    tech.addEventListener("click", () => displayWorkshops(workshops.filter(workshop => workshop.category === "Tech")));
    wellness.addEventListener("click", () => displayWorkshops(workshops.filter(workshop => workshop.category === "Wellness")));
}

getWorkshopData();
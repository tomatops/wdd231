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

        card.addEventListener("click", () => {
            displayWorkshopDetails(workshop);
        });

        cards.appendChild(card);
    });
}

async function getWorkshopData() {
    const response = await fetch(url);
    const workshops = (await response.json()).workshops;

    displayWorkshops(workshops);

    all.addEventListener("click", () => {
        displayWorkshops(workshops);
        removeClass(all);
    });

    arts.addEventListener("click", () => {
        displayWorkshops(workshops.filter(workshop => workshop.category === "Creative Arts"));
        removeClass(arts);
    });

    design.addEventListener("click", () => {
        displayWorkshops(workshops.filter(workshop => workshop.category === "Design"))
        removeClass(design);
    });

    business.addEventListener("click", () => {
        displayWorkshops(workshops.filter(workshop => workshop.category === "Business"))
        removeClass(business);
    });

    tech.addEventListener("click", () => {
        displayWorkshops(workshops.filter(workshop => workshop.category === "Tech"))
        removeClass(tech);
    });

    wellness.addEventListener("click", () => {
        displayWorkshops(workshops.filter(workshop => workshop.category === "Wellness"))
        removeClass(wellness);
    });
}

const removeClass = (category) => {
    all.classList.remove("active");
    arts.classList.remove("active");
    design.classList.remove("active");
    business.classList.remove("active");
    tech.classList.remove("active");
    wellness.classList.remove("active");

    category.classList.add("active");
}

getWorkshopData();

// DIALOG
function displayWorkshopDetails(workshop) {
    const workshopDetails = document.querySelector("#workshop-details");
    workshopDetails.innerHTML = "";

    workshopDetails.innerHTML = `
        <section class="dialog1">
            <h2>${workshop.name}</h2>
            <button id="closeModal">×</button>
        </section>
        <section class="dialog2">
            <h3>Overview</h3>
            <p>${workshop.description}</p>

            <h3>Schedule</h3>
            <div class="dialog-schedule">
                <p><span class="dialog-label">Start: </span>${workshop.start_date}</p>
                <p><span class="dialog-label">End: </span>${workshop.end_date}</p>
                <p>${workshop.time}</p>
                <p>Every ${workshop.days}</p>
                <p>📅 ${workshop.sessions} sessions</p>
                <p>🕑 ${workshop.session_duration}</p>
            </div>
            <h3>Instructor</h3>
            <div class="dialog-instructor">
                <p>${workshop.instructor_intro}</p>
            </div>
        </section>
        `;

    workshopDetails.showModal();

    const closeModal = workshopDetails.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        workshopDetails.close();
    });
}
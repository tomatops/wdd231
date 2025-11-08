const url = 'data/members.json';
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const cards = document.querySelector('#cards');

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone_number;
        website.textContent = company.website_url;

        logo.setAttribute('src', company.image_url);
        logo.setAttribute('alt', `${company.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '350');
        logo.setAttribute('height', '350');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();
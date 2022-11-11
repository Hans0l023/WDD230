const datefield = document.getElementById("date");
const fielddate = document.getElementById('java');
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
fielddate.innerHTML = `<em>${fulldate}</em>`;


function toggleMenu() {
    document.getElementById('primary_nav').classList.toggle('open');
    document.getElementById('hamburger_button').classList.toggle('open');
    
}

const x = document.getElementById('hamburger_button')
x.onclick = toggleMenu;


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getUTCDay()];




const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}

const img = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px"
};

const imgObs = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, img);

images.forEach((image) => {
    imgObs.observe(image);
});



if (day === 'Monday'){
    greeting = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}else if (day === 'Tuesday'){
    greeting = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
let thanks =[]
const thanks_you = function (){
    return document.getElementById('thanks').innerHTMl = 'Thank you '+ formElement.business.value +'! For joining our Community page';
}

const requestURL = href='data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);   
    const companies = jsonObject['companies'];
    companies.forEach(displaycompanies);
});



function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let imageurl = document.createElement('img');
    let address = document.createElement('span');
    let phone_number = document.createElement('span');
  
    // Change the textContent property of the h2 element to contain the company's full name
    h2.textContent = `${company.name} `;
    address.textContent = `Located at: ${company.address} `;
    phone_number.textContent= `Number: ${company.phone_number} `;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    imageurl.setAttribute('src', company.imageurl);
    imageurl.setAttribute('alt', `${company.name}  - ${company.order}`);
    imageurl.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone_number);
    card.appendChild(imageurl);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
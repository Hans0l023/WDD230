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


/* MAKE SURE THIS GETS CHANGED BEFORE TURNING IN*/
if (day === 'MOnday'){
    greeting = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}else if (day === 'Tuesday'){
        greeting = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
document.getElementById('msg4').textContent = greeting

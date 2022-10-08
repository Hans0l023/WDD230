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
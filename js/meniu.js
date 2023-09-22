const meniuDuomenys = [
    {
        pavadinimas: 'Apie',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Paslaugos',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Portfolio',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Kontaktai',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Naujienos',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Home',
        nuoroda: 'lempute.html'
    },
    {
        pavadinimas: 'Guest',
        nuoroda: 'lempute.html'
    }
];

function getMenuData() {
    return meniuDuomenys;
}

function generateMenuHTML(data) {
    let menuHTML = '';
    for (let i = 0; i < data.length; i++) {
        menuHTML += `<li><a href="${data[i].nuoroda}">${data[i].pavadinimas}</a></li>`;
    }
    return menuHTML; // Add this line to return the generated HTML
}

let menuData = getMenuData();
const sugeneruotiMeniuHTML = generateMenuHTML(menuData);
const menuDOM = document.querySelector('.menu');
menuDOM.innerHTML = sugeneruotiMeniuHTML;





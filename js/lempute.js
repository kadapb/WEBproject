let lemputeDOM = document.getElementById('lempute');
let images = ["img/lempute_off.jpg", "img/lempute_on.jpg"];
let alts = ["Lempute is off", "Lempute is on"];
let bgcolor = ["black", "white"]
let index = 0;

function toggleLempute() {
    index = (index + 1) % images.length;
    lemputeDOM.src = images[index];
    lemputeDOM.alt = alts[index];
    document.body.style.backgroundColor = bgcolor[index]
}


let rezultatai = document.getElementById('rezultatai');
let a = 1;
let b =10;
function sudetis(a,b){return a+b}
function atimtis(a,b){return a-b}
function dalyba(a,b){return a/b}
function daugyba(a,b){return a*b}


for(let i= 0; i < 5; i++) {
    a++;
    for(let j= 0; j < 10; j++) {
        b+=2;
        let S = sudetis(a,b);
        let at = atimtis(a,b);
        let dal = dalyba(a,b);
        let dau = daugyba(a,b);
        ats = `(a=${a},b=${b}), Suma = ${S},Skirtumas =  ${at},Dalyba = ${dal},Daugyba = ${dau}`;
        rezultatai.innerHTML += "<br>" + ats;
    }
}


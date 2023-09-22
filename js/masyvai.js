function skirtukas(nr){
    console.log(`**********${nr}**********`)
}

skirtukas(1)
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
for(let i= 0; i < array.length; i++) {
    let item = array[i];
    console.log(item);
}


skirtukas(2)
i = 0;
while(i < array.length){
    console.log(array[i]);
    i++
}

skirtukas(3)
i = 0;
do {
    console.log(array[i]);
    i++
} while(i < array.length);


let tekstas = document.getElementById('unikalusElementas');
let paveikleliai = document.getElementsByClassName('galerijosFoto')
let images = document.querySelectorAll("img");
let imagesKiekis = images.length;
console.log(imagesKiekis)

let h3ats = document.getElementById("uuid")
let atsakymas = `Siame faile yra ${imagesKiekis} nuotraukos `
h3ats.textContent = atsakymas;

let button = document.querySelector("button");
button.addEventListener("click", function() {
    alert(atsakymas);});

for(let i= 1; i < imagesKiekis; i=i+2) {
    images[i].alt = "testas";
}

i = 0;
while(i < array.length){
    console.log(images[i]);
    i++
}


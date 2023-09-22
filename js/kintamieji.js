let a = 1;
const tekstas = 'kintamojo a reiksme: '
let ats = tekstas + a;
console.log(ats);

a = 2;
ats = tekstas + a;
console.log(ats);

let b = 'Jūsų vardas ';
let c = 'Dziugas';

console.log(b+c);


let metai = '1993';
let mėnuo = '01';
let diena = '04';

const met = metai % 10;
const men = mėnuo % 10;
const d = diena % 10;

console.log(met+men+d)



// Funkcija rezultatu spausdinimui
function logKMIResults(nr){
console.log(`TESTINIAI DUOMENYS ${nr} rezultatai: `)
console.log('Marko KMI: ', markKMI)
console.log('Dzono KMI: ', dzonKMI)
console.log('marko KMI didesnis:', markoDidesnisKMI)
}

let markSvoris= 78;
let markUgis= 1.69;
let dzonSvoris=92;
let dzonUgis=1.95;
let markKMI=markSvoris/markUgis**markUgis
let dzonKMI=dzonSvoris/dzonUgis**dzonUgis
let markoDidesnisKMI = markKMI > dzonKMI

logKMIResults(1)

markSvoris= 95;
markUgis= 1.88;
dzonSvoris=85;
dzonUgis=1.76;
markKMI=markSvoris/markUgis**markUgis;
dzonKMI=dzonSvoris/dzonUgis**dzonUgis;
markoDidesnisKMI = markKMI > dzonKMI;

logKMIResults(2)

const dz=1.95;
console.log(dz);
{
const dz=2;
console.log(dz);
};
{
const dz=5;
console.log(dz)
}
const sachmataiX = document.querySelector('.sachmatai')
const sourcas ='https://picsum.photos/v2/list?page=2';

function generuotiGalerija(url) {

    fetch(url)
        .then( response => response.json())
        .then( jsonObjektas => {
            jsonObjektas.forEach(elementas => {
                const galElement = document.createElement('div');
                galElement.className = 'galElement';

                const img = document.createElement('img');
                img.src = elementas.url;
                img.alt = elementas.autorius + ' ' + elementas.pavadinimas;

                galElement.append(img);

                const pavadinimas = document.createElement('span');
                pavadinimas.textContent = elementas.pavadinimas;
                galElement.append(pavadinimas);

                const data = document.createElement('div');
                data.textContent = elementas.data;
                galElement.append(data);

                sachmataiX.append(galElement);

            });
        })
}

generuotiGalerija(sourcas);


const data = document.getElementById('data');
const saveBtn = document.getElementById('save');
const pvz = document.getElementById('pvz').textContent;



saveBtn.onclick = function() {
    localStorage.setItem('raktasVerte', data.value);
    console.log(data.value)
}

const naujasElementas = document.createElement('h3');
naujasElementas.className = 'h3dalykas';
naujasElementas.textContent = localStorage.getItem('raktasVerte');
document.getElementById('labas').append(naujasElementas);

const h3dalykas = document.querySelector('.h3dalykas')


data.addEventListener('keyup', function(){
    console.log('atspaudei mygtuka');
    h3dalykas.textContent = data.value;
    if (!pvz.startsWith(data.value)) {
        data.style.background = 'red';
    } else {
        data.style.background = ''; // Reset the background color if it matches
    }
});

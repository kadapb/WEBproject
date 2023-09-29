const chuckCategories = document.getElementById('chuckCategories');
const chuckJokes = document.getElementById('chuckJokes');
const saugotiBtn = document.getElementById('issaugoti');
const deleteBtn2 = document.getElementById('istrinti2');
const rodytiBtn = document.getElementById('rodyti');
const trintiBtn = document.getElementById('istrinti');
const baseUrl = 'https://api.chucknorris.io/jokes';


// 1. Parsisiunciame "Kategoriju" sarasa.
// https://api.chucknorris.io/jokes/categories
fetch(baseUrl + '/categories')
    .then(response => response.json())
    .then(result => renderCategories(result))
    .catch(err => console.error(err));

// 2. Generuojame naujus elementus pagal gautas kategorijas
function renderCategories(list) {
    list.forEach(item => generateCategoryItem(item));
}

// 3. Kiekvienam elementui prisegame 'click' eventa, kad kai ji
//    paspausime mums sius nauja uzklausa gauti juokeli pagal
//    pasirinkta kategorija

// https://api.chucknorris.io/jokes/random?category={category}
function generateCategoryItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    li.onclick = generateJoke;
    chuckCategories.append(li);
}

function generateJoke(e) {
    const categoryName = e.target.textContent;
    fetch(baseUrl + '/random?category=' + categoryName)
        .then(response => response.json())
        .then(joke => generateJokeElement(joke))
        .catch(err => console.error(err));
}
function changeStar(e){
    const zvaigzdMygt = e.target;
    if (zvaigzdMygt.textContent === '☆'){zvaigzdMygt.textContent = '★';}
    else {zvaigzdMygt.textContent = '☆'}
}

// 4. Kai gaunamas "Juokelis" sukuriamas <LI> elementas kuriame bus
//    "Juokelio tekstas" ir mygtukas "☆" "★" (saugoti i LocalStorage)
function generateJokeElement(joke) {
    const li = document.createElement('li');
    const starBtn = document.createElement('span');
    starBtn.textContent = '☆';
    starBtn.dataset.juokelis = joke.value;
    starBtn.onclick = changeStar;
    li.textContent = joke.value;
    li.prepend(starBtn);
    chuckJokes.append(li);
}

function clearAllFavorites() {
    deleteAllJokes();
    localStorage.removeItem('juokeliai');
}

function saveAllFavorites() {
    // Get the existing list of jokes from localStorage, or initialize an empty array if it doesn't exist
    const existingListOfJokesJSON = localStorage.getItem('juokeliai');
    const existingListOfJokes = existingListOfJokesJSON ? JSON.parse(existingListOfJokesJSON) : [];

    // Create a new list of jokes
    const newListOfJokes = [];

    // Get all the <li> elements containing jokes
    const jokeElements = document.querySelectorAll('#chuckJokes>li');

    // Iterate through the <li> elements
    jokeElements.forEach((jokeElement) => {
        const starElement = jokeElement.querySelector('span');
        if (starElement.textContent === '★') {
            const juokelisDataSete = starElement.dataset.juokelis;

            // Check if the joke is already in the existing list
            const isJokeAlreadyInList = existingListOfJokes.some((item) => item.value === juokelisDataSete);

            if (!isJokeAlreadyInList) {
                // Add the joke data to the new list of favorites if it's not a duplicate
                newListOfJokes.push({ 'value': juokelisDataSete });
            } else {
                // Display an alert if the joke is already in the list
                alert(`"${juokelisDataSete}" Juokinga, bet jau palaikinai seniau.`);
            }
        }
    });

    // Merge the existing list with the new list
    const mergedListOfJokes = existingListOfJokes.concat(newListOfJokes);

    // Save the merged list of favorites to localStorage
    localStorage.setItem('juokeliai', JSON.stringify(mergedListOfJokes));
}



// 5. Atidarius svetaine is naujo ir paspaudus mygtuka "Megstami",
//    atvaizduoti vius megstamus (paspausti su ★) elementus
//    is LocalStorage
// favBtn.onclick = displayFavoritesJokes;

function displayFavoritesJokes() {
    deleteAllJokes();
    const stingList = localStorage.getItem('juokeliai');
    const jokeList = JSON.parse(stingList);
    jokeList.forEach(joke => generateJokeElement(joke));
}

function deleteAllJokes() {
    const container = document.getElementById('chuckJokes');
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }
    const liElements = container.getElementsByTagName('li');
    while (liElements.length > 0) {
        container.removeChild(liElements[0]);
    }
}
trintiBtn.onclick = clearAllFavorites;
saugotiBtn.onclick = saveAllFavorites;
rodytiBtn.onclick = displayFavoritesJokes;
deleteBtn2.onclick = deleteAllJokes;
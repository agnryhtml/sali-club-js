let gridBotton = document.querySelector('.card-view-button-grid');
let listBotton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

gridBotton.onclick = function () {
    listBotton.classList.remove('active');
    gridBotton.classList.add('active');
    cardsList.classList.remove('list');
}

listBotton.onclick = function () {
    listBotton.classList.add('active');
    gridBotton.classList.remove('active');
    cardsList.classList.add('list');
}
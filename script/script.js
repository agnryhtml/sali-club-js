let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function () {
    console.dir('Привет!')
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
};

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
};

serifButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');
};
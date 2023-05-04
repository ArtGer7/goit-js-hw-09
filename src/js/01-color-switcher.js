const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const docBody = document.querySelector("body")
let isClicked = false
let intervalId = null;

startBtn.addEventListener('click', () => {
if(!isClicked){
    intervalId = setInterval (() =>{
        docBody.style.backgroundColor = getRandomHexColor();
        }, 1000);
    isClicked = true;
    startBtn.setAttribute('disabled', '');
}});

stopBtn.addEventListener('click', () =>{
    clearInterval(intervalId);
    isClicked = false;
    startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }



//   Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
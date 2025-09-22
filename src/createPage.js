import "./style.css";
import { buttonBehavior, createElements } from "./utils.js";

//Использовать стиль из кирупы

createElements.createH3();
createElements.createInput();
createElements.createButton();
createElements.createUl();

document.querySelector("h3").textContent = "Данные о вашем местоположении:";

const button = document.querySelector("button");
button.textContent = "click";
button.addEventListener("click", buttonBehavior);

//Если поле пустое и нажать кнопку, то данные о текущем местоположении
//навесить на поведение кнопки, проверку:
//1) Поле пустое? Если да, то текущее местоположение
//Добавить логику по очищению поля
//При двойном клике ошибка. Обработать в тесте

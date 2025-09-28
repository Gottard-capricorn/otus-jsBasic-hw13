import "./style.css";
import { buttonBehavior, createElements } from "./utils.js";

createElements.createH3();
createElements.createInput();
createElements.createButton();
createElements.createUl();

document.querySelector("h3").textContent = "Данные о местоположении:";

const button = document.querySelector("button");
button.textContent = "click";
button.addEventListener("click", buttonBehavior);

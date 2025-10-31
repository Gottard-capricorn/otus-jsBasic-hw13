//Проверяет, что ul пуст. Иначе обнуляет
function checkUl() {
  if (
    document.querySelector("ul") &&
    document.querySelector("ul").textContent !== ""
  ) {
    document.querySelector("ul").textContent = "";
  }
}

//view
//Очищаем поле input
function clearInput() {
  document.querySelector("input").value = ""; //Вынести повторяющиеся элементы
}

function createSubListForObject(el, fetchResult) {
  const liEl = document.createElement("li"); //view
  liEl.textContent = `${el}:`;
  const ulEl = document.createElement("ul");
  for (let i in fetchResult[el]) {
    const secLiEl = document.createElement("li");
    secLiEl.textContent = `${i}: ${fetchResult[el][i]}`;
    ulEl.append(secLiEl);
  }
  liEl.append(ulEl);
  document.querySelector("ul").append(liEl);
}

//Добавляем спарсенные результаты в unordered list
//Тоже дофига всего здесь
function createUnorderedList(fetchResult) {
  checkUl();
  console.log("we in createUnordered list");
  for (let el in fetchResult) {
    switch (true) {
      case Array.isArray(fetchResult[el]):
        createSubListForArray(el, fetchResult);
        break;
      case fetchResult[el] !== null && typeof fetchResult[el] === "object":
        createSubListForObject(el, fetchResult);
        break;
      default:
        console.log("we are in default");
        const liEl = document.createElement("li");
        liEl.textContent = `${el}: ${fetchResult[el]}`;
        document.querySelector("ul").append(liEl);
    }
  }
}

//Объект с методами создания элементов - работает с DOM, добавляет элементы, поэтому это view
//Можно под функцию класс переписать
export const createElements = {
  createH3: function () {
    document.body.append(document.createElement("h3"));
  },
  createButton: function () {
    document.body.append(document.createElement("button"));
  },
  createInput: function () {
    document.body.append(document.createElement("input"));
  },
  createUl: function () {
    document.body.append(document.createElement("ul"));
  },
};

//Функции ниже тоже работают с отображением в DOM
createElements.createH3();
createElements.createInput();
createElements.createButton();
createElements.createUl();

document.querySelector("h3").textContent = "Данные о местоположении:"; //view - потому-что работают с DOM и отображением

const button = document.querySelector("button"); //view
button.textContent = "click"; //view

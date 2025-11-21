function CreateElements() {
  this.createH3 = function () {
    return document.createElement("h3");
  };
  this.createButton = function () {
    return document.createElement("button");
  };
  this.createInput = function () {
    return document.createElement("input");
  };
  this.createUl = function () {
    return document.createElement("ul");
  };
}

export const createDomElement = new CreateElements();

export function AppendElementToDom() {
  this.appendH3 = function () {
    const h3 = createDomElement.createH3();
    document.body.append(h3);
  };
  this.appendButton = function () {
    const button = createDomElement.createButton();
    document.body.append(button);
  };
  this.appendInput = function () {
    const input = createDomElement.createInput();
    document.body.append(input);
  };
  this.appendUl = function () {
    const ul = createDomElement.createUl();
    document.body.append(ul);
  };
}

export function setH3Text(text) {
  document.querySelector("h3").textContent = text;
}

export function setButtonText(text) {
  document.querySelector("button").textContent = text;
}

export function getButton() {
  return document.querySelector("button");
}

export function getUl() {
  return document.querySelector("ul");
}

export function getInputValue() {
  return document.querySelector("input").value;
}

//Проверить, что ul пуст. Иначе обнулить
export function checkUl() {
  if (
    document.querySelector("ul") &&
    document.querySelector("ul").textContent !== ""
  ) {
    document.querySelector("ul").textContent = "";
  }
}

//Очистить поле input
export function clearInput() {
  document.querySelector("input").value = "";
}

//Заполнить DOM элемент контентом
function FillElementContent() {
  this.fillElement = function (element, content) {
    element.textContent = content;
    return element;
  };

  this.fillUlElement = function (ulElement, data) {
    const element = document.createElement("li");
    const fillEl = this.fillElement(element, data);
    ulElement.append(fillEl);
    return ulElement;
  };
}

//Привести value по ключу в полученном fetch запросе к типу string (в независимости от типа value)
function formatValue(value) {
  if (Array.isArray(value)) {
    return value.map((element) => formatValue(element)).join(",  ");
  }
  if (typeof value === "object" && value !== null) {
    return Object.entries(value)
      .map(([key, val]) => `${key}: ${formatValue(val)}`)
      .join(", ");
  }
  return String(value);
}

//Объявить и инициализировать функцию для заполнения элементов DOM полученным контентом
export const fillElementContent = new FillElementContent();

//Обработать каждое значение полученного fetch запроса (полученный fetch запрос - объект)
export function formatFetchResult(fetchResult, ulEl) {
  Object.entries(fetchResult).forEach(([key, val]) => {
    const formatVal = formatValue(val);
    const data = `${key}: ${formatVal}`;
    fillElementContent.fillUlElement(ulEl, data);
  });
}

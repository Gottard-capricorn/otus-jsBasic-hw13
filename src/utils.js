//Получаем информацию о текущем местоположении
async function getGeo() {
  return (await fetch("https://get.geojs.io/v1/ip/geo.json")).json();
}

//Получаем данные о городе
async function getFetchInformation(cityName) {
  const apiKey = "63b151efb40928e868a13e6198b120c9";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
  return (await fetch(url)).json();
}

//Можно ли как нибудь объединить две вышеперечисленные функции?

//Проверяет, что ul пуст. Иначе обнуляет
function checkUl() {
  if (
    document.querySelector("ul") &&
    document.querySelector("ul").textContent !== ""
  ) {
    //textContent?
    document.querySelector("ul").textContent = ""; //textContent?
  }
}

//Проверяем пусто ли поле ввода
function emptyInput() {
  if (document.querySelector("input").value === "") {
    //value?
    return true;
  } else {
    return false;
  }
}

//Очищаем поле input
function clearInput() {
  document.querySelector("input").value = ""; //value?
}

//Добавляем спарсенные результаты в список
function createLi(fetchResult) {
  for (let el in fetchResult) {
    console.log(el, fetchResult[el]); //el в нектороых слычаях тоже является объектом и нужно проходить по его вложенности
    //кроме weather - это массив. Его нужно обработать как массив.
    //В следующих уроках объясняется как работать с подобными случаями. Добавить это в список вопросов на консультацию?
    const liEl = document.createElement("li");
    liEl.textContent = `${el}: ${fetchResult[el]}`;
    document.querySelector("ul").append(liEl);
  }
}

//Добавляем поведение кнопки
export async function buttonBehavior() {
  checkUl();

  if (emptyInput()) {
    createLi(await getGeo());
  } else {
    const inputValue = document.querySelector("input").value;
    clearInput();
    createLi(await getFetchInformation(inputValue));

    // console.log(`value: ${document.querySelector("ul").value}`);
    // console.log(`textContent: ${document.querySelector("ul").textContent}`);
    // console.log(`innerText: ${document.querySelector("ul").innerText}`);
    // console.log(`innerHTML: ${document.querySelector("ul").innerHTML}`);
  }
}

//Объект с методами создания аргументов
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

// Понять логику работы скрипта с codeSandbox. Добавить в repomix, а потом в нейронку на обработку
//Именно здесь можно разобраться в textValue, innerHTML, value ....

//Объект с методами для fetch
export const getInformation = {
  //Получаем информацию о текущем местоположении
  getGeo: async () => {
    const url = "https://get.geojs.io/v1/ip/geo.json";
    return (await fetch(url)).json();
  },
  //Получаем данные о городе
  getFetchInformation: async (cityName) => {
    const apiKey = "63b151efb40928e868a13e6198b120c9";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    return (await fetch(url)).json();
  },
};

//Проверяет, что ul пуст. Иначе обнуляет
function checkUl() {
  if (
    document.querySelector("ul") &&
    document.querySelector("ul").textContent !== ""
  ) {
    document.querySelector("ul").textContent = "";
  }
}

//Проверяем пусто ли поле ввода
function emptyInput() {
  if (document.querySelector("input").value === "") {
    return true;
  } else {
    return false;
  }
}

//Очищаем поле input
function clearInput() {
  document.querySelector("input").value = "";
}

//Отдельная функция для случая с массивом
function createSubListForArray(el, fetchResult) {
  const liEl = document.createElement("li");
  liEl.textContent = `${el}:`;
  console.log(liEl);
  const ulEl = document.createElement("ul");
  for (let i in fetchResult[el][0]) {
    const secLiEl = document.createElement("li");
    secLiEl.textContent = `${i}: ${fetchResult[el][0][i]}`;
    ulEl.append(secLiEl);
  }
  liEl.append(ulEl);
  document.querySelector("ul").append(liEl);
}

function createSubListForObject(el, fetchResult) {
  const liEl = document.createElement("li");
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
function createUnorderedList(fetchResult) {
  console.log(typeof fetchResult);
  console.log(Object.keys(fetchResult).length);
  for (let el in fetchResult) {
    switch (true) {
      case Array.isArray(fetchResult[el]):
        createSubListForArray(el, fetchResult);
        break;
      case fetchResult[el] !== null && typeof fetchResult[el] === "object":
        createSubListForObject(el, fetchResult);
        break;
      default:
        const liEl = document.createElement("li");
        liEl.textContent = `${el}: ${fetchResult[el]}`;
        document.querySelector("ul").append(liEl);
    }
  }
}

//Добавляем поведение кнопки
export async function buttonBehavior() {
  checkUl();

  switch (true) {
    case emptyInput():
      createUnorderedList(await getInformation.getGeo());
      break;
    default:
      const inputValue = document.querySelector("input").value;
      clearInput();
      createUnorderedList(await getInformation.getFetchInformation(inputValue));
  }
}

//Объект с методами создания элементов
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

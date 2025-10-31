//Получаем информацию о местоположении и погоде в городе указанном пользователем
async function getFetchInformation(url) {
  return (await fetch(url)).json();
}

function GetGeoData() {
  const geoURL = "https://get.geojs.io/v1/ip/geo.json";
  const apiKey = "63b151efb40928e868a13e6198b120c9";

  this.myGeo = async function () {
    return await getFetchInformation(geoURL);
  };

  this.weatherInCity = async function (cityName) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    return await getFetchInformation(weatherURL);
  };
}

//Функция-конструктор для создания DOM элементов li и ul (расширяемое - можно добавлять и другие элементы, не ломая логику)
function CreateDOMelements() {
  this.createLi = function () {
    return document.createElement("li"); //Вот здесь не до конца понятно, что за document берётся
  };
  this.createUl = function () {
    return document.createElement("ul");
  };
}

//Отдельная функция для случая с массивом
function createSubListForArray(el, fetchResult) {
  const liEl = document.createElement("li"); //Создание элемента
  liEl.textContent = `${el}:`;
  const ulEl = document.createElement("ul"); //Ещё одна функция создания - тоже вынести
  //Всё что ниже тоже в отдельную функцию
  for (let i in fetchResult[el][0]) {
    const secLiEl = document.createElement("li");
    secLiEl.textContent = `${i}: ${fetchResult[el][0][i]}`;
    ulEl.append(secLiEl);
  }
  liEl.append(ulEl);
  document.querySelector("ul").append(liEl);
}

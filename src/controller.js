import "./style.css";
import {
  AppendElementToDom,
  setH3Text,
  setButtonText,
  getButton,
  checkUl,
  getUl,
  clearInput,
  formatFetchResult,
  getInputValue,
} from "./view.js";
import { GetGeoData } from "./model.js";

const appendElement = new AppendElementToDom();
appendElement.appendH3();
appendElement.appendInput();
appendElement.appendButton();
appendElement.appendUl();

setH3Text("Данные о местоположении:");
setButtonText("click");

const button = getButton();

//Объявить и инициализировать функцию для получения информации о погоде и о данном местоположении пользователя
const getGeo = new GetGeoData();
export async function buttonBehavior() {
  //Сохранить в переменную ul для дальнейшего заполнения
  const ulEl = getUl();
  checkUl();
  const inputValue = getInputValue();
  switch (true) {
    case inputValue === "":
      const fetchResult = await getGeo.myGeo();
      formatFetchResult(fetchResult, ulEl);
      break;
    case inputValue === "myWeather":
      clearInput();
      const myCity = (await getGeo.myGeo()).city;
      const weatherInMyCity = await getGeo.weatherInCity(myCity);
      formatFetchResult(weatherInMyCity, ulEl);
      break;
    case !(inputValue === ""):
      clearInput();
      const cityInformation = await getGeo.weatherInCity(inputValue);
      formatFetchResult(cityInformation, ulEl);
      break;
  }
}

button.addEventListener("click", buttonBehavior);

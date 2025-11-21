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
  const inputValue = getInputValue();
  let fetchResult;
  switch (true) {
    case inputValue === "":
      fetchResult = await getGeo.myGeo();
      break;
    case inputValue === "myWeather":
      clearInput();
      const myCity = (await getGeo.myGeo()).city;
      fetchResult = await getGeo.weatherInCity(myCity);
      break;
    case !(inputValue === ""):
      clearInput();
      fetchResult = await getGeo.weatherInCity(inputValue);
      break;
  }
  checkUl();
  formatFetchResult(fetchResult, ulEl);
}

button.addEventListener("click", buttonBehavior);

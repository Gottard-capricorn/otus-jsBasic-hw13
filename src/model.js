//Создать функцию конструтор
export function GetGeoData() {
  //Переменные ниже можно вынести в config.js или env
  const geoURL = "https://get.geojs.io/v1/ip/geo.json";
  const apiKey = "63b151efb40928e868a13e6198b120c9";

  //Получить форматированный fetch запрос
  this.getFetchInformation = async function (url) {
    return (await fetch(url)).json();
  };

  //Получить информацию о местоположении пользователя
  this.myGeo = async function () {
    return await this.getFetchInformation(geoURL);
  };

  //Получить информацию о местоположении и погоде в городе указанном пользователем
  this.weatherInCity = async function (cityName) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
    return await this.getFetchInformation(weatherURL);
  };
}

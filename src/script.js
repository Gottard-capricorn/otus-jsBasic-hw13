import "./style.css";

//Добавить поле ввода на страницу
//Добавить кнопку по которой начинается обработка
//Переменная с api key

//Для задания по получению погоды с текущего адреса
//Использовать стиль из кирупы

document.querySelector("h3").textContent = "Данные о вашем местоположении:";

async function getWeater() {
  const answer = await fetch("https://get.geojs.io/v1/ip/geo.json");
  return answer.json();
}

const answer = await getWeater();

const ul = document.createElement("ul");
document.body.append(ul);

for (let val in answer) {
  const liEl = document.createElement("li");
  liEl.innerText = `${val}: ${answer[val]}`;
  document.querySelector("ul").append(liEl);
}

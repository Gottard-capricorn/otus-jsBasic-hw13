//Видимо нужно дореализовать логику, чтобы получали данные пользователя и возвращалась погода в его городе - может отдельную кнопку
//Отдельно кнопку - введите данные, если данные не введены

import "./style.css";
import { buttonBehavior, createElements } from "./utils.js";

button.addEventListener("click", buttonBehavior);

//Добавляем поведение кнопки - нужно переписать. В claude https://claude.ai/chat/4c0c08cc-530e-43f2-bf13-7932e51d3eae - есть пример как исправить.
//Но пока что нужно самому подумать
export async function buttonBehavior() {
  console.log("we are in buttonBehavior");

  switch (true) {
    case emptyInput():
      console.log("we are emptyInput");
      createUnorderedList(await getInformation.getGeo());
      break;
    default:
      const inputValue = document.querySelector("input").value;
      clearInput();
      createUnorderedList(await getInformation.getFetchInformation(inputValue));
  }
}

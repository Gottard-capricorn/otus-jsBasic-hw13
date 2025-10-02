import { getInformation, buttonBehavior, createElements } from "./utils";

beforeAll(() => {
  const testObject = {
    timezone: "Europe/Prague",
    country: "Czechia",
    organization: "AS57043 Hostkey B.v.",
    asn: 57043,
    area_code: "0",
    organization_name: "Hostkey B.v.",
    country_code: "CZ",
    country_code3: "CZE",
    continent_code: "EU",
    ip: "194.58.154.103",
    latitude: "50.0848",
    longitude: "14.4112",
    accuracy: 100,
  };
  //Наверное правильно здесь было создать файл и отдельные объекты для тестирования в нём
  async function resolveObject(params) {
    return {
      json: () => {
        return testObject;
      },
    };
  }
  global.fetch = jest.fn(resolveObject);

  createElements.createH3();
  createElements.createInput();
  createElements.createButton();
  createElements.createUl();

  document.querySelector("h3").textContent = "Данные о местоположении:";

  const button = document.querySelector("button");
  button.textContent = "click";
  button.addEventListener("click", buttonBehavior);
});

afterAll(() => {
  delete global.fetch;
});

test("Getting a relevant response from geojs", () => {}); //Проверяем, что fetch отрабатывает

test("Check, that all elements exist", () => {});

test("Check button behavior", () => {}); //Тестируем разные сценарии в одном тесте?
test("Verifiction data", () => {}); //тест на то, что после введения значения и нажатию кнопки получаем необходимые данные
test("empty page", () => {}); //Проверяем, что изначально html страница пуста
test("empty page multiple", async () => {
  console.log(`До клика: ${document.body.innerHTML}`);
  let event = new Event("click");
  document.querySelector("button").dispatchEvent(event);
  document.querySelector("button").dispatchEvent(event);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  console.log(`После клика: ${document.body.innerHTML}`);
  // console.log((document.querySelector("ul").innerHTML).split("<li>").length);
  expect(document.querySelector("ul").querySelectorAll("li").length).toBe(13);
}); //множественное нажатие на клик, проверка
test("fetch", async () => {
  const getGeoResult = await getInformation.getGeo();
  const getGeoResultLength = Object.keys(getGeoResult).length;
  expect(typeof getGeoResult).toBe("object");
  expect(getGeoResultLength).toBe(13);
});

// Понять логику работы скрипта с codeSandbox. Добавить в repomix, а потом в нейронку на обработку
// Использовать стиль из кирупы
// Добавить todo плагин
// Посмотреть ещё раз тот плагин анимирующий
// Всё таки mock-fetch тот крокодил здесь не работает. Но как можно было использовать всё таки. jest fn норм получилост, но какой смысл это тестировать? Сами создали и проверили, что правильно создали. Наверное дальнейшую логику так удобно тестировать
// Ещё одна проблема: При множественных кликах свойства меняются местами - как исправить?

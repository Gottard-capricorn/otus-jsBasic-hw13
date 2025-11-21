//Ох ещё тесты по следующему заданию
import { buttonBehavior } from "./controller.js";
import { AppendElementToDom, getButton } from "./view.js";
import { GetGeoData } from "./model.js";

beforeEach(() => {
  const appendElement = new AppendElementToDom();
  appendElement.appendButton();
  const geoData = new GetGeoData();

  // Создаем мок для fetch
  mockFetch = jest.fn();
  global.fetch = mockFetch;

  //Шаманим на geodata, чтобы норм значения возвращались и можно было тестить кнопку
  //Что ещё можно протестить? Другую логику buttonBehavior? - больше разных сценариев. Отработка ошибок. Заполнение тектом h3 и др. логику
});

afterEach(() => {
  jest.clearAllMocks();
});

const button = getButton();

describe("Check button behavior", () => {
  test("empty page multiple", async () => {
    console.log(`До кликов: ${document.body.innerHTML}`);

    const mockData = {
      ip: "194.58.154.103",
      timezone: "Europe / Prague",
      organization: " AS57043 Hostkey B.v.",
      asn: 57043,
      area_code: 0,
      organization_name: "Hostkey B.v.",
      country: "Czechia",
      country_code3: "CZE",
      continent_code: "EU",
      country_code: "CZ",
      latitude: 50.0848,
      longitude: 14.4112,
      accuracy: 100,
    };

    const mockResponce = {
      json: jest.fn(() => Promise.resolve(mockData)),
    };

    mockFetch.mockImplementation(() => Promise.resolve(mockResponce));

    let event = new Event("click");
    button.dispatchEvent(event);
    button.dispatchEvent(event);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    console.log(`После кликов: ${document.body.innerHTML}`);
    // console.log((document.querySelector("ul").innerHTML).split("<li>").length);
    expect(document.querySelector("ul").querySelectorAll("li").length).toBe(13);
  });
});

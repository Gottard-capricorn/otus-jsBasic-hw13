// //Ох ещё тесты по следующему заданию
// import { buttonBehavior } from './controller.js';
// import { AppendElementToDom, getButton } from './view.js';
// import { GetGeoData } from './model.js';

// beforeEach(() => {
//     const appendElement = new AppendElementToDom;
//     appendElement.appendButton();
//     geoData = new GetGeoData();

//     // Создаем мок для fetch
//     mockFetch = jest.fn();
//     global.fetch = mockFetch;

//     //Шаманим на geodata, чтобы норм значения возвращались и можно было тестить кнопку
//     //Что ещё можно протестить? Другую логику buttonBehavior?
// })

// afterEach(() => {
//     jest.clearAllMocks();
// });

// const button = getButton();

// describe("Check button behavior", () => {

//     test("empty page multiple", async () => {
//       console.log(`До кликов: ${document.body.innerHTML}`);

//       let event = new Event("click");
//       button.dispatchEvent(event);
//       button.dispatchEvent(event);
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           resolve();
//         }, 100);
//       });
//       console.log(`После кликов: ${document.body.innerHTML}`);
//       // console.log((document.querySelector("ul").innerHTML).split("<li>").length);
//       expect(document.querySelector("ul").querySelectorAll("li").length).toBe(13);
//     });

// })

test("test", () => {});

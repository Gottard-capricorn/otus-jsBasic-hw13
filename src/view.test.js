//Тут можно тупо каждую функцию тестировать
//Подумать над более изощрёнными тестами (интеграционными)
import { createDomElement, checkUl, fillElementContent } from "./view.js";

beforeEach(() => {
  document.body.innerHTML = "<h3></h3><input><ul></ul>";
});

describe("Тестирование view.js", () => {
  describe("Тестирование функции-конструктора CreateElements", () => {
    it("Метод createH3 должен возвращать HTMLHeadingElement", () => {
      const h3 = createDomElement.createH3();
      expect(h3).toBeInstanceOf(HTMLHeadingElement);
    });

    it("Метод createInput должен возвращать HTMLInputElement", () => {
      const input = createDomElement.createInput();
      expect(input).toBeInstanceOf(HTMLInputElement);
    });

    it("Метод createButton должен возвращать HTMLButtonElement", () => {
      const button = createDomElement.createButton();
      expect(button).toBeInstanceOf(HTMLButtonElement);
    });

    it("Метод createUl должен возвращать HTMLUListElement", () => {
      const ul = createDomElement.createUl();
      expect(ul).toBeInstanceOf(HTMLUListElement);
    });
  });

  it("Тестирование функции checkUl", () => {
    document.querySelector("ul").textContent = "test";
    expect(document.querySelector("ul").textContent).toEqual("test");
    checkUl();
    expect(document.querySelector("ul").textContent).toEqual("");
  });

  describe("Тестирование функции-конструктора FillElementContent", () => {
    it("Тестирование метода fillElement", () => {
      expect(document.querySelector("ul").textContent).toEqual("");
      fillElementContent.fillElement(document.querySelector("ul"), "test");
      expect(document.querySelector("ul").textContent).toEqual("test");
    });
  });
});

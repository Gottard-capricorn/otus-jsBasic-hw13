import { GetGeoData } from "./model.js";

describe("GetGeoData", () => {
  let geoData;
  let mockFetch;

  beforeEach(() => {
    geoData = new GetGeoData();

    // Создаем мок для fetch
    mockFetch = jest.fn();
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getFetchInformation", () => {
    it("должна возвращать преобразованный JSON ответ", async () => {
      const mockData = { test: "data" };
      const mockResponse = {
        // json: jest.fn().mockResolvedValue(mockData)
        json: jest.fn(() => Promise.resolve(mockData)),
      };
      // mockFetch.mockResolvedValue(mockResponse);

      mockFetch.mockImplementation(() => Promise.resolve(mockResponse));

      // async function resolvedObject(params) {
      //   return {
      //     json: jest.fn().mockResolvedValue(mockData)
      //   };
      // }

      //Настроить fetch, чтобы возвращал объект с json методом
      // mockFetch.mockResolvedValue((await resolvedObject()).json);

      const result = await geoData.getFetchInformation("https://test.com");

      expect(mockFetch).toHaveBeenCalledWith("https://test.com"); //Проверить, что fetch вызывается с правильным url - типа передётся правильный url при вызове myGeo и weatherInCity

      // expect((await resolvedObject()).json).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalled(); //Проверить, что вызывается метод json для преобразования ответа
      expect(result).toEqual(mockData); //Проверить, что возвращается корректный результат
    });

    it("должна корректно обрабатывать разные URL", async () => {
      const mockData = { city: "Moscow" };
      const mockResponse = {
        json: jest.fn().mockResolvedValue(mockData),
      };
      mockFetch.mockResolvedValue(mockResponse);

      const testUrl = "https://api.example.com/data";
      await geoData.getFetchInformation(testUrl);

      expect(mockFetch).toHaveBeenCalledWith(testUrl);
    });
  });

  //-----myGeo-----
  //Проверить, что вызывается правильный url
  //Проверить структуру возвращаемых данных
  // describe('myGeo', () => {
  //   it('должна вызывать API геолокации с правильным URL', async () => {
  //     const mockGeoData = {
  //       city: 'Moscow',
  //       country: 'Russia',
  //       latitude: '55.7558',
  //       longitude: '37.6173'
  //     };
  //     const mockResponse = {
  //       json: jest.fn().mockResolvedValue(mockGeoData)
  //     };
  //     mockFetch.mockResolvedValue(mockResponse);

  //     const result = await geoData.myGeo();

  //     expect(mockFetch).toHaveBeenCalledWith('https://get.geojs.io/v1/ip/geo.json');
  //     expect(result).toEqual(mockGeoData);
  //   });

  //   it('должна возвращать данные геолокации', async () => {
  //     const expectedData = {
  //       ip: '1.2.3.4',
  //       city: 'London',
  //       region: 'England'
  //     };
  //     const mockResponse = {
  //       json: jest.fn().mockResolvedValue(expectedData)
  //     };
  //     mockFetch.mockResolvedValue(mockResponse);

  //     const result = await geoData.myGeo();

  //     expect(result).toHaveProperty('city');
  //     expect(result).toEqual(expectedData);
  //   });
  // });

  //-----weatherInCity-----
  //Проверяем, что формируется правильный URL
  //Проверяем, что обрабатываются название городов с пробелами
  //Проверяем структуру возвращаемых данных
  //   describe('weatherInCity', () => {
  //     it('должна вызывать API погоды с правильным URL и параметрами', async () => {
  //       const cityName = 'London';
  //       const mockWeatherData = {
  //         weather: [{ main: 'Clear' }],
  //         main: { temp: 20 }
  //       };
  //       const mockResponse = {
  //         json: jest.fn().mockResolvedValue(mockWeatherData)
  //       };
  //       mockFetch.mockResolvedValue(mockResponse);

  //       await geoData.weatherInCity(cityName);

  //       const expectedUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=63b151efb40928e868a13e6198b120c9';
  //       expect(mockFetch).toHaveBeenCalledWith(expectedUrl);
  //     });

  //     it('должна корректно формировать URL для разных городов', async () => {
  //       const mockResponse = {
  //         json: jest.fn().mockResolvedValue({})
  //       };
  //       mockFetch.mockResolvedValue(mockResponse);

  //       await geoData.weatherInCity('Paris');

  //       expect(mockFetch).toHaveBeenCalledWith(
  //         expect.stringContaining('q=Paris')
  //       );
  //       expect(mockFetch).toHaveBeenCalledWith(
  //         expect.stringContaining('units=metric')
  //       );
  //     });

  //     it('должна возвращать данные о погоде', async () => {
  //       const mockWeatherData = {
  //         weather: [{ main: 'Clouds', description: 'overcast clouds' }],
  //         main: { temp: 15, humidity: 80 },
  //         name: 'Berlin'
  //       };
  //       const mockResponse = {
  //         json: jest.fn().mockResolvedValue(mockWeatherData)
  //       };
  //       mockFetch.mockResolvedValue(mockResponse);

  //       const result = await geoData.weatherInCity('Berlin');

  //       expect(result).toEqual(mockWeatherData);
  //       expect(result).toHaveProperty('weather');
  //       expect(result).toHaveProperty('main');
  //     });

  //     it('должна обрабатывать города с пробелами в названии', async () => {
  //       const mockResponse = {
  //         json: jest.fn().mockResolvedValue({})
  //       };
  //       mockFetch.mockResolvedValue(mockResponse);

  //       await geoData.weatherInCity('New York');

  //       expect(mockFetch).toHaveBeenCalledWith(
  //         expect.stringContaining('q=New York')
  //       );
  //     });
  //   });
});

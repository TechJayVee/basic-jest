let cityDatabase = [];
let foodDatabase = [];

const initializeCityDatabase = async () => {
  return (cityDatabase = ["Vienna", "San Juan"]);
};
const initializeFoodDatabase = async () => {
  return (foodDatabase = [
    { city: "Vienna", food: "Wiener Schnitzel" },
    { city: "San Juan", food: "Mofongo" },
  ]);
};
const clearCityDatabase = async () => {
  return (cityDatabase = []);
};

function isCity(city) {
  return cityDatabase.includes(city);
}
function isValidCityFoodPair(city, food) {
  const matchingPair = foodDatabase.find(
    (pair) => pair.city === city && pair.food === food
  );
  return !!matchingPair;
}
beforeAll(async () => {
  await initializeCityDatabase();
});

afterAll(async () => {
  await clearCityDatabase();
  console.log("it runs", cityDatabase);
});

// beforeEach(async () => {
//   await initializeCityDatabase();
// });

// afterEach(async () => {
//   await clearCityDatabase();
//   console.log("it runs", cityDatabase);
// });

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});

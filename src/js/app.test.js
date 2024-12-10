import { forTest } from "./app";

// describe("Пример теста", () => {
//     const ans = forTest()
//     expect(1).toBe(1);
// });

test("widget should render", () => {
    expect(forTest()).toEqual(1);
  });


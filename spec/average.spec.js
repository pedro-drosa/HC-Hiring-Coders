const average = require("../2022/algoritmos/average");

describe("perform binary search", function () {
  it("should return the number of years days and months based on total days", () => {
    expect(average(10, 7)).toBe(8.5);
    expect(average(3, 2)).toBe(2.5);
  });
});

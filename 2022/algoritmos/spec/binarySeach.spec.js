const binarySearch = require("../2022/estrutura-de-dados/binarySearch");

describe("perform binary search", function () {
  beforeEach(() => {
    this.values = [100, 200, 300, 400, 500];
  });
  it("must return the position of the element if it exists in a vector", () => {
    expect(binarySearch(300, this.values)).toBe(2);
  });

  it("should return -1 if the element does not exist in an array", () => {
    expect(binarySearch(120, this.values)).toBe(-1);
  });

  it("check if the value is NAN", () => {
    const value = 1 * "b";
    expect(value).toBeNaN();
  });
});

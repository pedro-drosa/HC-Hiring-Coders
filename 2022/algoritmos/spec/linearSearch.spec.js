const linearSeach = require("../2022/estrutura-de-dados/linearSearch");

describe("perform linear search", function () {
  beforeEach(() => {
    this.values = [100, 200, 300, 400, 500];
  });

  it("must return the position of the element if it exists in a vector", () => {
    expect(linearSeach(200, this.values)).toBe(1);
  });

  it("should return -1 if the element does not exist in an array", () => {
    expect(linearSeach(120, this.values)).toBe(-1);
  });
});

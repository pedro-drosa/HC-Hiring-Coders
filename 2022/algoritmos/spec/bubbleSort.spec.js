const bubbleSort = require("../2022/estrutura-de-dados/bubbleSort");

describe("bubble sort", function () {
  beforeEach(() => {
    this.values = [5, 4, 3, 2, 1];
  });

  it("should return array in numerical order", () => {
    const result = bubbleSort(this.values);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

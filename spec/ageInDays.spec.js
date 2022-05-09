const AgeInDays = require("../2022/algoritmos/AgeInDays");

const ageInDays = new AgeInDays();

describe("perform binary search", function () {
  beforeEach(() => {
    this.days = [400, 800, 30];
  });

  it("should return the number of years days and months based on total days", () => {
    expect(ageInDays.calculate(this.days[0])).toEqual({
      years: 1,
      months: 1,
      days: 5,
    });
    expect(ageInDays.calculate(this.days[1])).toEqual({
      years: 2,
      months: 2,
      days: 10,
    });
    expect(ageInDays.calculate(this.days[2])).toEqual({
      years: 0,
      months: 1,
      days: 0,
    });
  });
});

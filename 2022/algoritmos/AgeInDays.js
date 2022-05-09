class AgeInDays {
  constructor() {
    this.daysInAYear = 365;
    this.daysInMonth = 30;
  }

  getYears(ageInDays) {
    return parseInt(ageInDays / this.daysInAYear);
  }

  getMonths(ageInDays) {
    const rest = parseInt(ageInDays % this.daysInAYear);
    return parseInt(rest / this.daysInMonth);
  }

  getDays(ageInDays) {
    const rest = parseInt(ageInDays % this.daysInAYear);
    return parseInt(rest % this.daysInMonth);
  }

  calculate(ageInDays) {
    return {
      years: this.getYears(ageInDays),
      months: this.getMonths(ageInDays),
      days: this.getDays(ageInDays),
    };
  }
}

module.exports = AgeInDays;

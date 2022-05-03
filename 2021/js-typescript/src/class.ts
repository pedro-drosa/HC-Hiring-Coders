class myDateClass {
  public day: number;
  private mounth: number;
  protected year: number;

  constructor(day:number, mounth:number, year:number = 1970) {
    this.day = day;
    this.mounth = mounth;
    this.year = year;
  }
}

const birth = new myDateClass(17, 09, 1995);
console.log(birth.day);
// console.log(birth.mounth); //erro
// console.log(birth.year); //erro

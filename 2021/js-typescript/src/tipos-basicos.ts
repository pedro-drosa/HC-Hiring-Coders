//Boolean
const active: boolean = true;

//Number
const year: number = 2021;
const ranking:number = 4.5;

//String
const myName: string = 'Pedro Mascarenhas';

//Array
const ages: number[] = [18,26,36];
const notes: Array<number> = [8,9,10];

//Tuple
let movie: [string,number,string];
movie = ['The Empire Strikes Back', 1980, 'George Lucas'];

//Enum
enum State {
  pending, //0
  canceled, //1
  finalized //2
}

const statusCode: State = State.finalized;

//Any
const response: any[] = [123,'Pedro',false];
const responseAny: any = {
  x: 100,
  y: 'top',
  z:false
}

//Void
function helloWord(): void {
  console.log('Hello World');
}

//Null e Undefined
const n: null = null;
const u: undefined = undefined;

//Object
function ShowMovie(movie: object) {
  return movie;
}

ShowMovie({
  title:'The Empire Strikes Back', 
  year: 1980, 
  author: 'George Lucas'
});

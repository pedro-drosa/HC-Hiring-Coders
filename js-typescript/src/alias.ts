//Alias
type mixType = string[];
const fruitMix: mixType = ['banana','apple', 'grape','strawberry'];


type movieType = {
    title: string; 
    year: number;
    author: string;
}

function showMovie(movie: movieType) {
  return `Title: ${movie.title} | Year: ${movie.year} | Author: ${movie.author}`;
}


console.log(
  showMovie({
    title:'The Empire Strikes Back',
    year: 1980, 
    author:'George Lucas'
  })
);

type developerType = {
  name: string,
  lastName: string,
  city: string,
  birth: number,
  techs: string[]
}

const developer: developerType = {
  name: 'Pedro', 
  lastName: 'Mascarenhas', 
  city: 'Barra Velha',
  birth: 1995, 
  techs: ['Node','Javascript','React','Typescript']
};

function showDeveloper(developer: developerType) {
  const techs = developer.techs.reduce((next, tec) => {
    return next += `, ${tec}`;
  })

  return `
    Name: ${developer.name} ${developer.lastName} 
    City: ${developer.city}
    birth: ${new Date().getFullYear() - developer.birth}
    techs: ${techs}
  `;
}

console.log(showDeveloper(developer));


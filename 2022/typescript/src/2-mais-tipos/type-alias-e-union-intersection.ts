type User = {
  name: string;
  lastname: string;
  dateOfBirth: Date;
  age?: number; //opcional
};

const pedro: User = {
  name: "Pedro",
  lastname: "Mascrenhas",
  dateOfBirth: new Date("1995-09-17"),
  // age: 26
};

// Union types
// | (como se fosse o ||)

type LogLevel = "info" | "error" | "debug";

function logMessage(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`);
}

logMessage("Um erro qualquer", "error");
// logMessage('Um erro qualquer', 'asasasa') // Error

// Intersection types
// & (como se fosse o &&)

type About = {
  bio: string;
  interests: string[];
};

type Profile = User & About;

const userProfile: Profile = {
  name: "Pedro",
  lastname: "Mascarenhas",
  dateOfBirth: new Date("1995-09-17"),
  bio: "Olá Mundo!",
  interests: ["musica", "jogos", "desenvolvimento"],
};

// Outra forma de utilizar

type ComposedProfile = User & {
  log: LogLevel;
};

import { readFile, writeFile } from "fs";

export async function read(path) {
  return new Promise((res, rej) => {
    readFile(path, (err, data) => {
      if (err) rej(err);
      return res(JSON.parse(data));
    });
  });
}

export async function write(path, data) {
  return new Promise((res, rej) => {
    writeFile(path, data, (err) => {
      if (err) rej(err);
      return res();
    });
  });
}

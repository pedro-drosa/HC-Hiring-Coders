let condition = 1;

while (condition <= 9) {
  console.log(`------ Tabuada do ${condition} ------`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${condition} X ${i} = ${condition * i}`);
  }

  condition++;
}

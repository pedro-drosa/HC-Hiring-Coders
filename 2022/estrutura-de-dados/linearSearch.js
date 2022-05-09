function linearSeach(value, list) {
  for (let index = 0; index < list.length; index++) {
    if (value === list[index]) {
      return index;
    }
  }
  return -1;
}

module.exports = linearSeach;

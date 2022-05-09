function bubbleSort(values) {
  let tmp;

  for (let i = 0; i < values.length; i++) {
    for (let pos = 0; pos < values.length; pos++) {
      if (values[pos] > values[pos + 1]) {
        tmp = values[pos];
        values[pos] = values[pos + 1];
        values[pos + 1] = tmp;
      }
    }
  }

  return values;
}

module.exports = bubbleSort;

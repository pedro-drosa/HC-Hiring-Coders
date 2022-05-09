function binarySearch(value, list) {
  let start = 0;
  let middle = 0;
  let end = list.length;

  while (start <= end) {
    middle = parseInt((start + end) / 2);

    if (value === list[middle]) {
      return middle;
    }

    if (value > list[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;

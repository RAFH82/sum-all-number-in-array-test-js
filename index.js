function sumItems(array) {
  sum = 0;
  for (element of array) {
    if (Array.isArray(element)) {
     sum += sumItems(element);
    } else {
    sum += element;
    }
  }
  return sum;
};

module.exports = sumItems;
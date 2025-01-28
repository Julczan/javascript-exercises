const removeFromArray = function (array, ...index) {
  array = array.filter((item) => !index.includes(item));
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

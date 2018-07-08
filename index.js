function sumItems(array) {
  return (array.length === 0) ? 0:
  array[0] + sumItems(array.slice(1))
}

module.exports = sumItems;
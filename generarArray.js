function generarArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}

export default generarArray

// You should implement your task here.

module.exports = function towelSort (matrix) {
  let output=[]
  if (!matrix) {
    return []
  }
  for (let i=0; i<matrix.length; i++){
    if (i % 2 != 0) {
      console.log(i);
      output.push(matrix[i].reverse())
    } else {
      output.push(matrix[i])
    }
  }
  let endOutput = output.flat()
  return endOutput
}

module.exports = function solveEquation(equation) {
  let arrOfNumbers = equation.split(/ /);
  //a=arrOfNumbers[0], b=arrOfNumbers[3]+arrOfNumbers[4], c= arrOfNumbers[7]+arrOfNumbers[8]
  let solutions = [];
  let d=(arrOfNumbers[3]+arrOfNumbers[4])*(arrOfNumbers[3]+arrOfNumbers[4])-4*arrOfNumbers[0]*(arrOfNumbers[7]+arrOfNumbers[8]);
  solutions.push(Math.round((-(arrOfNumbers[3]+arrOfNumbers[4])-Math.sqrt(d))/2/arrOfNumbers[0]));
  solutions.push(Math.round((-(arrOfNumbers[3]+arrOfNumbers[4])+Math.sqrt(d))/2/arrOfNumbers[0]));
  solutions.sort((a,b)=> a-b);
  return solutions;
}

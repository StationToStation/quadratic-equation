module.exports = function solveEquation(equation) {
  let arrOfNumbers = equation.split(/ /);
  const a = arrOfNumbers[0];
  const b = arrOfNumbers[3]+arrOfNumbers[4];
  const c = arrOfNumbers[7]+arrOfNumbers[8];
  
  let solutions = [];
  let d=b*b-4*a*c;
  solutions.push(Math.round((-b-Math.sqrt(d))/2/a));
  solutions.push(Math.round((-b+Math.sqrt(d))/2/a));
  solutions.sort((a, b) => a-b);
  return solutions;
}

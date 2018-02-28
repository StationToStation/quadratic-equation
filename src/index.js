module.exports = function solveEquation(equation) {
let arrOfNumbers = equation.split(/ /);
  const a = arrOfNumbers[0];
  const b = arrOfNumbers[3]+arrOfNumbers[4];
  const c = arrOfNumbers[7]+arrOfNumbers[8];
  
  let solutions = [];
  let d=b*b-4*a*c;
  let sol1=Math.round((-b-Math.sqrt(d))/2/a);
  let sol2=Math.round((-b+Math.sqrt(d))/2/a);
  if(sol1>sol2) {
    solutions. push(sol2);
    solutions. push(sol1);
  }
  else {
    solutions. push(sol1);
    solutions. push(sol2);
  }
  return solutions;
}

function SolverV1 (a, b){
  // a and b must be a string
  let k = Math.max(a.length, b.length);
  let result = "";
  let next = 0;
  for (let i = k, i > 0, i--){
    let an = a.charAt(i), bn = b.charAt(i);
    let sum = an + bn + next;
    next = 0;
    if (sum >= 10) { sum -= 10; next += 1; };
    result = sum.toString() + result;
  }
  return result;
}

function SolverV1 (a, b){
  // a and b must be a string
  let k = Math.max(a.length, b.length);
  let result = "";
  let next=0,an=0,bn=0,sum=0;
  for (let i = k; i > 0; i--){
    an = a.charAt(i-1);
    bn = b.charAt(i-1);
    sum = an + bn + next;
    next = 0;
    if (sum >= 10) { sum -= 10; next += 1; };
    result = sum.toString() + result;
  }
  if (next >= 1) return next.toString() + result;
  else return result;
}

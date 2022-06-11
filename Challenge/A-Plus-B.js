function SolverV1 (a, b){
  // a and b must be a string!!!
  if (b.length > a.length) return SolverV1(b, a); 
  let k=a.length,result="",diff=a.length-b.length,next=0,an=0,bn=0,sum=0;
  let N = (L) => Number(L);
  for (let i = k; i > 0; i--){
    an = a.charAt(i-1);
    bn = b.charAt(i-(1+diff));
    sum = N(an) + N(bn) + next;
    next = 0;
    if (sum >= 10) { sum -= 10; next += 1; };
    result = sum.toString() + result;
  }
  if (next >= 1) return next.toString() + result;
  else return result;
}

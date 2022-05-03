var m1, m2, e1, e2;

function plus (a, b) {
  toME(a, b);
  if (m1 == 0) return b;
  if (m2 == 0) return a;
  if (e1 < e2) return plus(b, a);
  resolve((m1 + (m2 * Math.pow(10, e2 - e1)), e1);
  // if i change all js + * to plus, times (function),
  // whats the new limit?
  return convertnum(m1, e1); // convert num is M/E => MeE
}

function toME (a, b) {
    /* 
     |  make a "string" number to M*10^E
     |  exmaple, 5e8, M=5, E=8
     |  a = first "str", b = second "str"
     |  stores ans in m1, e1, m2, e2
     */
}
function resolve (m, e) {
  /*
  |  convert m to correct m 
  |  ex. 17.5e10 = 1.75e11
  |
  |
  */
}

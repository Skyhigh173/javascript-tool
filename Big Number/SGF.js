function contains(obj,str) {
  return obj.split(str).length - 1;
}
function calc (str) {
  let star = contains(str,"*");
  let chars = str.split(" ");
  let a = Number(chars[0]);
  let b = Number(chars[2]);
  let ans = 1;
  for (let i = 0; i < star; i++) {
    ans = loop(ans, b, star);
    
  }
  return ans;
}
function loop (Ans, A, S) {
  let ans = Ans;
  for (let i = 0; i < A; i++){
    ans *= A;
  }
  return ans;
}

/*  Slow growing function */

function SolverV1 (inp) {
  let chars = "0689abdgeopqBDOPQR", val = "112111111111211111";
  let c = 0;
  for (let i=0; i < inp.length; i++) {
    if (chars.includes(inp.charAt(i))) c += Number(val.charAt(chars.indexOf(inp.charAt(i))));
  }
  return c;
}

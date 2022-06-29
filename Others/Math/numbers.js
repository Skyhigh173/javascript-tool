/* an api of Math */

export const math {
  
  err: (type) => {
    if (type == 0) console.log("Math error");
  }
  
  ilogb: (arg) => {
    return Math.floor(Math.log(arg) / Math.log(2));
  }
  
  log10: (M) => {
    let log2_hi = 3.01029995663611771306e-01;
    let log2_lo = 3.69423907715893078616e-13;
    if (M == 0) return NaN;
    if (M <= 0) return NaN;
    let n = math.ilogb(M);
    if (n < 0) n -= 1;
  }
}

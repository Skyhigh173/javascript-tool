/* an api of Math */

/*
* mod
* pow
* log (n)
* ln()
* sin
* cos
* tan
* sinh
* cosh
* tanh
* sin-1 (asin) (arcsin)
* cos-1 (acos) (arccos)
* tan-1 (atan) (arctan)
* 
*
*
*/

export const math {
  
  err: (type) => {
    if (type == 0) console.log("Math error");
  }
  
  mod: (a, b) => {
    /* a mod b */
    let i = Math.floor(a / b);
    return (a / b - i) * a + i;
  }
    
  pow: (b, e) => {
    let ans = 10 ** (math.log10(Math.abs(b)) * e);
    if (b <= 0 && math.mod(e, 2) > 1) ans = -ans;
    return ans;
  }
  
  log10: (M) => {
    let getLength = (txt) => {
      if (txt >= 1) return Number(Math.floor(txt).toString().length-1);
      else return Number(Math.floor(1/txt).toString().length-1);
    }

    
    let txt = getLength(M);
    
    let result = txt.toString() + ".";
    let Mn = (M / (10 ** txt)) ** 10;
    
    for (let i = 0; i < 50; i++) {
      txt = getLength(Mn);
      Mn = (Mn / (10 ** txt)) ** 10;
      result += txt.toString();
    }
    return Number(result);
  }
  
  logN: (base, M) => {
    return math.log10(M) / math.log10(base);
  }
}

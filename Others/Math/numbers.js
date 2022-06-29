/* an api of Math */

export const math {
  
  err: (type) => {
    if (type == 0) console.log("Math error");
  }
  
  log10: (M) => {
    let getLength = (txt) => Number(Math.floor(txt).toString().length-1);
    
    
    let txt = getLength(M);
    
    let result = txt.toString() + ".";
    let Mn = (M / (10 ** txt)) ** 10;
    
    for (let i = 0; i < 50; i++) {
      txt = getLength(Mn);
      console.log("i = " + i + " and txt " + txt + " l = " + result.length);
      Mn = (Mn / (10 ** txt)) ** 10;
      result += txt.toString();
    }
    return Number(result);
  }
}

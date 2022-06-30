/* kina a math solver */
/* only support linear */
function solve (equation) {
  let eq = equation.split("=");
  let left = splitMulti(eq[0], ["+","-","*","/"]);
  
}

function splitMulti(str, tokens){
        var tempChar = tokens[0]; 
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
}

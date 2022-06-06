/*
Complex num v1

supported calc:
+
-
*
/
sin()
cos()
log()
ln()
tan()
^

usage : 
var a = new ComplexNum(1,2); // 1+2i

*/



function ComplexNum(real, img) {
  this.r = real;
  this.i = img;
  this.value = real + "+" + img + "i";
}
function Plus(a, b) {
  return new ComplexNum((a.r + b.r), (a.i + b.i));
}
function Minus(a, b) {
  return new ComplexNum((a.r - b.r), (a.i - b.i));
}
//function Times(a, b) {
//  return new ComplexNum((a.r * b.r - a.i ), ());
//}

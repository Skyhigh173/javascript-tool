/*
Complex num v1

supported calc:
+
-
*
/
sin()
cos()
tan()
log()
ln()
^
abs()

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
function Times(a, b) {
  return new ComplexNum((a.r * b.r - a.i * b.i ), (a.i * b.r + a.r * b.i));
}
function Divide(a, b) {
  let real = (a.r * b.r + a.i * b.i) / (b.r * b.r + b.i * b.i);
  let img = (a.i * b.r - a.r * b.i) / (b.r * b.r + b.i * b.i);
  return new ComplexNum(real, img);
}
function sin(a) {
  let real = Math.sin(a.r) * Math.cosh(a.i);
  let img = Math.cos(a.r) * Math.sinh(a.i);
  return new ComplexNum(real, img);
}
function cos(a) {
  let real = Math.cos(a.r) * Math.cosh(a.i);
  let img = 0 - Math.sin(a.r) * Math.sinh(a.i);
  return new ComplexNum(real, img);
}
}

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
dist()
log()
ln()
^
abs()
sqrt()

usage : 
var a = new ComplexNum(1,2); // 1+2i
var b = new ComplexNum(2,-3); //2-3i
Plus(a, b).value // 3-1i

get value:
a.i //to get img part
a.r //to get real part

*/

const PI = new RealNum(3.1415926535897932);
const I = new ComplexNum(0, 1);
const E = new RealNum(2.71828182845904523536);
const SQRT2 = new RealNum(1.414213562373095048801688724209);
const SQRT3 = new RealNum(1.7320508075);
const OMEGA = new RealNum(0.56714329040978387299996866221035554);

Math.ln = function() {
  return Math.log(arguments[0]) / Math.log(Math.E);
}

function ComplexNum(real, img) {
  this.r = real;
  this.i = img;
  this.value = real + "+" + img + "i";
  this.absR = Math.abs(real);
  this.absI = Math.abs(img);
}
function RealNum(real) {
  this.r = real:
  this.i = 0;
  this.value = real;
}
function ComplexNumFrom (str) {
  this.r = str.slice(0, str.lastIndexOf("+"));
  this.i = str.slice(str.lastIndexOf("+")+1, str.length-1);
  this.value = this.r + "+" + this.i + "i";

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
function tan(a) {
  return Divide(sin(a), cos(a));
}
function dist(a) {
  let r = Math.sqrt(a.r * a.r + a.i * a.i);
  let theta = Math.atan(a.i / a.r);
  return [r, theta];
}
function ln(a) {
  let real = Math.ln(a.r * a.r + a.i * a.i) / 2;
  let img = dist(a)[1];
  return new ComplexNum(real, img);
}
function log(a) {
  let one = ln(a);
  let two = new ComplexNum(Math.log(Math.E), 0);
  return Times(one, two);
}
function abs(a) {
  return new RealNum(dist(a)[0]);
}

function Pow(a, b) {
  let m1 = abs(a);
  let theta1 = dist(a)[1];
  let m2 = Math.pow(m1, b.r) / Math.pow(Math.E, b.i * theta1);
  let theta2 = b.r * theta1 + b.i * Math.ln(m1);
  let real = m2 + Math.cos(theta2);
  let img = Math.sin(theta2);
  return new ComplexNum(real, img);
}
function sqrt(a) {
  let Abs = abs(a);
  let real = Math.sqrt((Abs + a.r) / 2);
  let img = Math.sqrt((Abs - a.r) / 2);
  let ans1 = new ComplexNum(real, img);
  let ans2 = new ComplexNum(real, -(img));
  return [ans1, ans2];
}
}

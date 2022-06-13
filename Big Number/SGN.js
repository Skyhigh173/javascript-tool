function calc(obj) {
  let str = obj.replace("<","_").replace(">","_").split("_");
  let a = str[0], b = str[2], c = str[1];
  
  if (c >= 2) return calc(a + "<" + (c-1) + ">" + (b ** c));
  else return (a ** b);
}

/* Slow growing numbers */
/*
a<c>b

for c >= 2, a<c>b = a<c-1>(b^c)

some numbers :

1<1>1 = 1
2<1>2 = 4
2<1>3 = 8
...
a<1>b = a^b

1<2>1 = 1
2<2>2 = 16
2<2>3 = 512
2<2>10 = 1.26e30

10<2>10 = 1e100
10<3>10 = infinity (1e1e100?)
*/

var char = ["0","1","2","3","4","5","6","7","8","9","a", "b", "c", "d", "e", "f"]
var nums = [1,0,0,0,0,0,1,0,2,1,1,1,0,1,1,0];

function getChar (txt) {

  return nums[char.indexOf(txt)];
}
function getTotal (four) {
  let tl = 0;
  for (let i = 0; i < four.length; i++) {
    tl += getChar(four.charAt(i));
  }
  return tl;
}

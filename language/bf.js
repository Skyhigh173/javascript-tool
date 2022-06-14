function findArray(str) {
  let result = [];
  let loops = 0;
  let char = "";
  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    
    if (char == "[") {
      loops += 1; 
      result.push(loops); 
    } 
    else if (char == "]") {
      result.push(loops); 
      loops -=1;
    } 
    else result.push("");
  }
  return result;
}
function run(command) {
  let pointer = 0;
  let chars = "";
  let array = [0];
  let output = "";
  let loop = findArray(command);
  let Current = 0;
  while (Current < command.length) {
    chars = command.charAt(Current);
    Current += 1;
    if (chars == ">") {
      pointer += 1;
      if (pointer > array.length-1) array.push(0);
      continue;
    }
    if (chars == "<") {
      pointer -= 1;
      if (pointer < 0) pointer = 0;
      continue;
    }
    
    if (chars == "+") {
      array[pointer] += 1;
      continue;
    }
    if (chars == "-") {
      array[pointer] -= 1;
      continue;
    }

    if (chars == ".") {
      output = output + String.fromCharCode(array[pointer]);
      continue;
    }
    
    if (chars == "[") {
      let index = loop[Current-1];
      
      if (array[pointer] == 0) {
        Current += 1;
        while (loop[Current-1] != index) {
          Current += 1;
        }
      }
      continue;
    }
    if (chars == "]") {
      let index = loop[Current-1];
      
      if (array[pointer] != 0) {
        Current -= 1;
        while (loop[Current-1] != index) {
          Current -= 1;
        }
      }
      continue;
    }
  }
  console.log(output);
}
    
    

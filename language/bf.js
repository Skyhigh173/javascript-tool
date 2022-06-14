function run(command) {
  let pointer = 0;
  let chars = "";
  let array = [0];
  let output = "";
  for (let i = 0; i < command.length; i++) {
    chars = command.charAt(i);
    
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
      output = output + String.charCodeAt(array[pointer]);
      continue;
    }
    
    

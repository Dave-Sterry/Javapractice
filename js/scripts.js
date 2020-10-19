let sentence = prompt("enter a sentence");
console.log(sentence);

function caps(x){
    first = x.charAt(0).toUpperCase();
    last = x.charAt(x.length-1).toUpperCase();
  return first + last;
}

alert(caps(sentence));
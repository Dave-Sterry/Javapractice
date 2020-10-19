let sentence = prompt("enter a sentence");
console.log(sentence);

function caps(x){
  let first = x.charAt(0).toUpperCase();
  let last = x.charAt(x.length-1).toUpperCase();
  return first + last;
}

let results = caps(sentence);

function reverse(x){
   let first = x.charAt(0);
  let last = x.charAt(1);
  return last + first;
}

alert(reverse(results));
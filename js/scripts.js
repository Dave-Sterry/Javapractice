let sentence = prompt("enter a sentence");
console.log(sentence);

function caps(x){
  let first = x.charAt(0).toUpperCase();
  let last = x.charAt(x.length-1).toUpperCase();
  return first + last;
}

function reverse(x){
  let first = x.charAt(0);
  let last = x.charAt(1);
  return last + first;
}

function capAndRev(){
  caps(sentence);
  let results = caps(sentence);
  let reversed = reverse(results);
  alert(sentence + reversed);
}
capAndRev();

function getLength(sentence){
  return sentence.length;
}
getLength (sentence);

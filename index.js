const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 // const titleCased = (tutorials.split(),  ) => {
 //   return tutorials
 // }

//map twice break up into individual sentences and then second time into individual words

/*How can we "iterate" through individual words in a string?
Can we execute an interation inside an iteration? How?
How can we capitalize just the first letter in a word?*/


// const titleCased = function(array) {
//   const newString = array.map((str) =>
//     str
//       .split(" ")
//       .map((word) => word[0].toUpperCase() + word.slice(1))
//       .join(" ")
//   );
//   return newString;
// };

function titledCaser(str) {
  const newString = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")
;
  return newString;
}

function titleCased() {
  return tutorials.map(titledCaser)
}

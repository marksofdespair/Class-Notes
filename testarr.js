let arr = [
    ["Bear"],
    ["Owl"],
    ["Josie"]
]
const input = require('readline-sync');

console.log(arr[1]);

const questions = [ 
    ['How many planets are in the Solar System?', '8'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
    ['What year was JavaScript created?', '1995']  
  ];

  let correctAnswers = 0;

  for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = input.question(${questions});

    if (response === answer) {
        correctAnswers++;
    }
  }


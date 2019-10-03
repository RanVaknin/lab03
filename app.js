
/* eslint-disable for-direction */
/* eslint-disable no-unused-vars */
'use strict';
var counter = 0;

let userName = prompt('What is your name stranger?');
alert('Hi there! ' + userName + ' Welcome to my AboutMe page. I\'m happy to have you here.');

let likesDogs = prompt('Do I like dogs?');
if (likesDogs.toLowerCase() === 'yes' || likesDogs.toLowerCase() === 'y'){
  alert('correct!');
  counter++;
  //console.log("correct!");
}else if(likesDogs.toLowerCase() === 'no' || likesDogs.toLowerCase() === 'n' ){
  alert('Incorrect!');
  //console.log("Incorrect!");
}else {
  alert('invalid entry');
  //console.log("invalid entry");
}
let showerDaily = prompt('Do I shower every day?');
if (showerDaily.toLowerCase() === 'yes' || showerDaily.toLowerCase() === 'y'){
  alert('Thats great! Good hygene is key to living a healthy lifestyle.');
  counter++;
  console.log('Thats great! Good hygene is key to living a healthy lifestyle.');
}else if(showerDaily.toLowerCase() === 'no' || showerDaily.toLowerCase() === 'n'){
  alert('Yuck! Showering daily is a healthy life choice - you should consider it, however you don\'t have to shampoo daily.');
  //console.log("Showering daily is a healthy life choice - you should consider it, however you don't have to shampoo daily.");
}else {
  alert('invalid entry');
}

let liveInSeattle = prompt('Do I live in Tacoma?');
if (liveInSeattle.toLowerCase() === 'yes' || liveInSeattle.toLowerCase() === 'y'){
  alert('Wrong! I live in Capitol Hill neighbourhood, In Seattle.');
}else if(liveInSeattle.toLowerCase() === 'no' || liveInSeattle.toLowerCase() === 'n'){
  alert('You probably know that I live in Capitol Hill in Seattle :)');
  counter++;
}else {
  alert('invalid entry');
}

let likesCats = prompt('Do I like cats?');
if (likesCats.toLowerCase() === 'yes' || likesCats.toLowerCase() === 'y' ){
  alert('Damn right I do! I have the best cat ever, his name is Biscuit!');
  counter++;
}else if(likesCats.toLowerCase() === 'no' || likesCats.toLowerCase() === 'n'){
  alert('I don\'t like all cats but it\'s safe to say that I like most cats');
}else {
  alert('invalid entry');
}
let generalTrivia = prompt('Are there 262 bones in the human body?');
if (generalTrivia.toLowerCase() === 'yes'|| generalTrivia.toLowerCase() === 'y'){
  alert('The correct answer is 206.. It\'s ok! You were off by 56 bones.');
}else if(generalTrivia.toLowerCase() === 'no' || generalTrivia.toLowerCase() === 'n'){
  alert('Correct! You probaly know that 206 bones is the right answer.');
  counter++;
}else {
  alert('invalid entry');
}


/*
var firstQuestion = ['Is the meaning of life 42?','correct!','INCORRECT!'];
var secondQuestion = ['Do you shower every day?','Thats great! Good hygene is key to living a healthy lifestyle.','Showering daily is a healthy life choice - you should consider it, however you don\'t have to shampoo daily.'];
var thirdQuestion = ['Is codeFellows located on 3rd Ave?','Your\'e so right! codeFellows is located at 2901 3rd Ave #300, Seattle, WA 98121','ohh.. you were so close.. you were probably thinking about 2nd ave or 4th ave..'];
var fourthQuestion = ['is Gengar a direct evolution of ghastly? (Pokemon reference)','Wrong! How could you not know this? Hunter is a direct evolution of Ghastly, Gengar is it\'s last evolution','Correct! Ghastly --> Hunter --> Gengar'];
var fifthQuestion = ['There are 262 bones in the human body.','The correct answer is 206.. It\'s ok! You were only off by 56 bones.','Correct! You probaly know that 206 is the right answer.'];


let questions = [
  { question: 'Is the meaning of life 42?', correctAnswers: ['yes', 'y'], choices: { yes: 'correct!', no: 'INCORRECT!', y: 'correct!', n: 'INCORRECT!' } },
  { question: 'Do you shower every day?', correctAnswers: ['yes', 'y'], choices: { yes: 'Wonderful!', no: 'yuck!' } }
];

let correctAnswerCount = 0;
for (let i = 0; i < questions[i]; i++) {
  let q = questions[i];

  let userResponse = prompt(q.question);
  userResponse = userResponse.toLowerCase();

  if (q.choices.hasOwnProperty(userResponse)){
    alert(q.choices[userResponse]);
    if (q.correctAnswers.includes(userResponse)){
      correctAnswerCount++;
    }
  }else {
    alert('Invalid answer');
  }
}

let questionList = [
  { question: 'Is the meaning of life 42?', correctAnswer: [ 'yes' , 'y'] , choices: {yes: 'correct', y:'correct',n: 'incorrect', no: 'incorrect'} }

]
for let (i = 0; i < questionList[i]; i++){
  let userPropmt = prompt(questionList[i].question);
  userPropmt = userPropmt.toLowerCase();

  if (questionList[i].choices.hasOwnProperty(userPropmt)){
    alert()
  }
}
*/


// function setUpQuestion(question,yesRsponse,noResponse){
//   let userResponse = prompt(question);
//   if (userResponse.toLowerCase() === 'yes' || userResponse.toLowerCase() === 'y'){
//     alert(yesRsponse);
//   } else if(userResponse.toLowerCase() === 'no' || userResponse.toLowerCase() === 'n'){
//     alert(noResponse);
//   } else {
//     alert('invalid entry');
//   }
// }

// setUpQuestion(firstQuestion[0],firstQuestion[1],firstQuestion[2]);
// setUpQuestion(secondQuestion[0],secondQuestion[1],secondQuestion[2]);
// setUpQuestion(thirdQuestion[0],thirdQuestion[1],thirdQuestion[2]);
// setUpQuestion(fourthQuestion[0],fourthQuestion[1],fourthQuestion[2]);
// setUpQuestion(fifthQuestion[0],fifthQuestion[1],fifthQuestion[2]);

const guessNumber = 8;
for (let i = 0 ; i < 4; i++){
  let userGuess = prompt('please guess a number from 1 - 10');
  userGuess = parseInt(userGuess);
  if (userGuess === guessNumber){
    // alert('You guessed it! the number is 8!');
    counter++;
    break;
  } else if (userGuess < guessNumber){
    alert('Your guess is a little too low..');
  }else if (userGuess > guessNumber){
    alert('Slow down cowboy.. you went too high.');
  } else {
    alert('invalid entry');
  }
}
alert('The correct answer is 8!');

let favoriteFruit = ['BANANA','WATERMELON','MANGO'];
const numOfGuesses = 5;
for (let k = 0 ; k < 5 ; k++){
  let userAnswer = prompt('what is my favorite fruit?');
  userAnswer = userAnswer.toUpperCase();
  if(favoriteFruit.includes(userAnswer)){
    counter++;
    alert('You are right '+ userAnswer + ' is one of my favorite fruits!');
    alert('my favorite fruits are '+ favoriteFruit '.' )
    break;
  } else {
    alert('nope.. try again..');
  }
}
/*
        var questionList = [
          {question: 'Do I like dogs?' ,  correctAnswer: ['yes','y'], incorrectAnswer: ['no','n'], correctResponse: 'Of course I do!' , incorrectResponse: 'Incorrect! Who doesn\'t like dogs??'},
          {question: 'Do I prefer dogs over cats?', correctAnswer: ['no','n'], incorrectAnswer: ['yes','y']},
        ]
        for (var i=0; i < questionList.length; i++){
          console.log(questionList[i].question);
          var userResponse = prompt(questionList[i].question);
          userResponse = userResponse.toLowerCase();
          if(questionList[i].correctAnswer.includes(userResponse)){
            alert(questionList[i].correctResponse)
          }
        }
        */
alert('you have '+ counter +' correct answers out of 7 total.');

alert('Thank you ' + userName + ' for playing my little game. Enjoy my AboutME page.');

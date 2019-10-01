/* eslint-disable no-unused-vars */
/*'use strict';

let userName = prompt('What is your name stranger?');
alert('Hi there! ' + userName + ' Welcome to my AboutMe page. I\'m happy to have you here.');

let questionOne = prompt('Is the meaning of life 42?');
if (questionOne.toLowerCase() === 'yes'){
  alert('correct!');
  //console.log("correct!");
}else if(questionOne.toLowerCase() === 'no'){
  alert('Incorrect!');
  //console.log("Incorrect!");
}else {
  alert('invalid entry');
  //console.log("invalid entry");
}
let questionTwo = prompt('Do you shower every day?');
if (questionTwo.toLowerCase() === 'yes'){
  alert('Thats great! Good hygene is key to living a healthy lifestyle.');
  console.log('Thats great! Good hygene is key to living a healthy lifestyle.');
}else if(questionTwo.toLowerCase() === 'no'){
  alert('Showering daily is a healthy life choice - you should consider it, however you don\'t have to shampoo daily.');
  //console.log("Showering daily is a healthy life choice - you should consider it, however you don't have to shampoo daily.");
}else {
  alert('invalid entry');
}

let questionThree = prompt('Is codeFellows located on 3rd Ave?');
if (questionThree.toLowerCase() === 'yes'){
  alert('Your\'e so right! codeFellows is located at 2901 3rd Ave #300, Seattle, WA 98121');
  //console.log("Your'e so right! codeFellows is located at 2901 3rd Ave #300, Seattle, WA 98121");
}else if(questionThree.toLowerCase() === 'no'){
  alert('ohh.. you were so close.. you were probably thinking about 2nd ave or 4th ave..');
  //console.log("ohh.. you were so close.. you were probably thinking about 2nd ave or 4th ave..");
}else {
  alert('invalid entry');
}

let questionFour = prompt('is Gengar a direct evolution of ghastly? (Pokemon reference)');
if (questionFour.toLowerCase() === 'yes'){
  alert('Wrong! How could you not know this? Hunter is a direct evolution of Ghastly, Gengar is it\'s last evolution');
  //console.log("Wrong! How could you not know this? Hunter is a direct evolution of Ghastly, Gengar is it's last evolution");
}else if(questionFour.toLowerCase() === 'no'){
  alert('Correct! Ghastly --> Hunter --> Gengar');
  //console.log("Correct! Ghastly --> Hunter --> Gengar");
}else {
  alert('invalid entry');
}
let questionFive = prompt('There are 262 bones in the human body.');
if (questionFive.toLowerCase() === 'yes'){
  alert('The correct answer is 206.. It\'s ok! You were off by 56 bones.');
  //console.log("The correct answer is 206.. It's ok! You were just 56 bones off.");
}else if(questionFive.toLowerCase() === 'no'){
  alert('Correct! You probaly know that 206 is the right answer.');
  //console.log("Correct! You probaly know that 206 is the right answer.");
}else {
  alert('invalid entry');
}

alert('Thank you ' + userName + ' for playing my little game. Enjoy my AboutME page.');
*/
var firstQuestion = ['Is the meaning of life 42?','correct!','ICORRECT!']
var secondQuestion = ['Do you shower every day?','Thats great! Good hygene is key to living a healthy lifestyle.','Showering daily is a healthy life choice - you should consider it, however you don\'t have to shampoo daily.'];
var thirdQuestion = ['Is codeFellows located on 3rd Ave?','Your\'e so right! codeFellows is located at 2901 3rd Ave #300, Seattle, WA 98121','ohh.. you were so close.. you were probably thinking about 2nd ave or 4th ave..'];
var fourthQuestion = ['is Gengar a direct evolution of ghastly? (Pokemon reference)','Wrong! How could you not know this? Hunter is a direct evolution of Ghastly, Gengar is it\'s last evolution','Correct! Ghastly --> Hunter --> Gengar'];
var fifthQuestion = ['There are 262 bones in the human body.','The correct answer is 206.. It\'s ok! You were only off by 56 bones.','Correct! You probaly know that 206 is the right answer.'];

function setUpQuestion(question,yesRsponse,noResponse){
  let userResponse = prompt(question);
  if (userResponse.toLowerCase() === 'yes'){
    alert(yesRsponse);
  } else if(userResponse.toLowerCase() === 'no'){
    alert(noResponse);
  } else {
    alert('invalid entry');
  }
}
let userName = prompt('What is your name stranger?');
alert('Hi there! ' + userName + ' Welcome to my AboutMe page. I\'m happy to have you here.');

setUpQuestion(firstQuestion[0],firstQuestion[1],firstQuestion[2]);
setUpQuestion(secondQuestion[0],secondQuestion[1],secondQuestion[2]);
setUpQuestion(thirdQuestion[0],thirdQuestion[1],thirdQuestion[2]);
setUpQuestion(fourthQuestion[0],fourthQuestion[1],fourthQuestion[2]);
setUpQuestion(fifthQuestion[0],fifthQuestion[1],fifthQuestion[2]);

alert('Thank you ' + userName + ' for playing my little game. Enjoy my AboutME page.');
var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("Enter your Name : ");
console.log("Welcome " + userName);
console.log("This is just to know how well do you know about me\nLet's get started");

var AllQuestions = [{
  question :"Do you know my FullName? : " ,
  answer :"AinalaPrashanthReddy"},
  {question : "Where do I live? ", 
   answer : "hyderabad"},
  {question :"Favorate food item which I like? ", answer : "Chicken"},
   {question :"My favorate color? " , 
   answer : "black"}, 
   {question : "My favorate place? " ,answer : "kerala"},
    {question : "Do you know in which mounth I born? ", answer : "feb"}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right!");
    score++;
  } else {
      console.log("You are Wrong!");
      score = score;
  }
  console.log("Your current score is : ", score);
  console.log("=====================");
}

for (var i=0; i<AllQuestions.length; i++){
  var currentQuestion = AllQuestions[i];
  play(currentQuestion.question , currentQuestion.answer);
}

console.log("Your Total score is : "+ score);
console.log("Thankyou for your time!")
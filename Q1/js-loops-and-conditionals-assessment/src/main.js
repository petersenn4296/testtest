// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

function question0(array) {
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      console.log(array[i])
    }
  }
}

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

 function question1(array) {
var num = [2, 4, 8, 16]

for (var i = 0; i < num.length; i++) {
  if (num[i] * 2 > 12) {
    console.log(num[i] * 2)
  }
}
// }
// question1()
// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."

function question2(array) {

  var week = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']

  for (var i = 0; i < week.length; i++) {
    switch (week) {
      case (week[i] === 'Sun' || 'Sat'):
        console.log("Yay, its the weekend!")
        break;
      case (week[i] === 'Fri'):
        console.log("Almost there...")
        break;
      case (week[i] === 'Mon'):
        console.log("I hate mondays more than Garfield")
        break;
      default:
        console.log("Everybody's working for the weekend.");
    }
  }
}

module.exports = {
  question0,
  question1,
  question2
}

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase 
  
    var lowercase = 'hello!'
    lowercase.toLowerCase() === lowercase // true
     
    var mixedCase = 'I love you, Grandma.'
    mixedCase.toLowerCase() === mixedCase // false
    mixedCase.toUpperCase() === mixedCase 

    if (string === uppercase) {
      return ('YES INDEED!')
    } else if (string === lowercase) {
      return ('I can\'t hear you!')
    } else if (string === mixedCase) {
      return ("I love you, too.")
    }
}


// it worked.. thank you.. my new code that passed!!
// function sayHiToGrandma(string) {
// var lowercase = "hello"
// var uppercase = "HELLO"
// if (string.toLowerCase() === string)
// return("I can't hear you!");
// else if (string.toUpperCase() === string) 
// return("YES INDEED!")
//   }


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ["What's your name? Nicknames are also acceptable :)", "What's an activity you like doing?", "what do you listen to while doing that?", "which meal is your favorite?", "Whats your favorite thing to eat for that meal?", "which sport is your absolute favorite?", "what is your superpower? In a few words tell us what you're amazing at!"];

// rl.question('What is your name?', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`)//});
// rl.question("anything", (answer) => {
//   console.log(`anything is : ${answer}`);
// rl.close();
// });

// rl.question("What is your cat's name?", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`)//});
// // rl.question("anything", (answer) => {
// //   console.log(`anything is : ${answer}`);
// rl.close();
// });
// // for (let que of questions) {
// //   rl.question(que, (answer) => {
// //     console.log(`${que} : ${answer}`);
// //   })
// // }
// let answers = [];


rl.question(questions[0], (answer0) => {
    // console.log(answer0);
    rl.question(questions[1], (answer1) => {
    // console.log(answer1);
      rl.question(questions[2], (answer2) => {
        rl.question(questions[3], (answer3) => {
          rl.question(questions[4], (answer4) => {
            rl.question(questions[5], (answer5) => {
              rl.question(questions[6], (answer6) => {
                console.log("So, your name is " + answer0);
                console.log("and you like to " + answer1);
                console.log("you like listenening to " + answer2);
                console.log("your favorite meal is  " + answer3);
                console.log("your favorite part of that meal is  " + answer4);
                console.log("your favorite sport seems to be " + answer5);
                console.log("lastly your super power is " + answer6);
                rl.close();
              })
            })
          })
        })
      })
    })
  })



// console.log('hell');
// console.log(`Thank you for your valuable feedback: ${answer1}`)
// console.log(`Thank you for your valuable feedback: ${answer0}`);

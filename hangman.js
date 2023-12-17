alert(`Welcome to this online coaching game! 
Diyako going to be PT for Rob.
Rob is working as a programmer and can pay very good money, he wants to build bigger muscle and gets stronger.
help him by guessing the right exercise`);

alert(`Rules: 
-You can only put one letter at the time.
-You have only 5 lives
-You lose 1 live by gussing wrong letters`);

let muscle = ['biceps', 'thighs', 'abs', 'pecs', 'gluts', 'back'];
let randomMuscle;
let usedMuscles = [];
let promptMessage;
let exercise;
let lives = 5;
let score = 0;
let secret;
let playAgain = `Do you want to play again? \n(Yes or No)`;
let guessedLetters;

let gameInit = () => {
  if (usedMuscles.length === muscle.length) {
    alert('You have used all the muscles. Game over!');
    return;
  }

  do {
    randomMuscle = muscle[Math.floor(Math.random() * muscle.length)];
  } while (usedMuscles.includes(randomMuscle));

  usedMuscles.push(randomMuscle);
  promptMessage = `Rob wnats stronger ${randomMuscle}, what exercise should he do?`;
  lives = 5;
  guessedLetters = [];

  if (randomMuscle === 'biceps') {
    exercise = 'curls';
  } else if (randomMuscle === 'pecs') {
    exercise = 'benchpress';
  } else if (randomMuscle === 'abs') {
    exercise = 'plank';
  } else if (randomMuscle === 'gluts') {
    exercise = 'deadlifts';
  } else if (randomMuscle === 'thighs') {
    exercise = 'squats';
  } else {
    exercise = 'pullups';
  }

  secret = Array(exercise.length).fill('_');
};

gameInit();

while (lives > 0) {
  let answer = prompt(
    `${promptMessage} \n ${secret} \nScore: ${score} \nLives: ${lives}`
  );

  if (answer === null || answer === undefined) {
    alert(`Do you give up on Rob so easily?`);
    break;
  }

  answer = answer.toLowerCase();

  if (answer.length !== 1 || !/^[a-z]$/.test(answer)) {
    alert(`One letter at the time!`);
  } else if (guessedLetters.includes(answer)) {
    alert(`You already guessed the letter "${answer}". Try another one.`);
  } else if (exercise.includes(answer)) {
    guessedLetters.push(answer);

    for (let i = 0; i < exercise.length; i++) {
      if (answer === exercise[i]) {
        secret[i] = answer;
      }
    }

    if (!secret.includes('_')) {
      alert(`Well done! Now Rob got stronger in his ${randomMuscle}🙌🏼`);
      score++;
      if (score === 6) {
        alert(
          `Good job👏🏼👏🏼 \n now you won the game🏆🏆🏆\nRob has become super strong💪🏼\nwe will send him the invoice💸💸💸`
        );
        break;
      }
      gameInit();
    }
  } else if (!exercise.includes(answer)) {
    lives--;
    alert(`Wrong answer! You have ${lives} lives left`);
    if (lives === 0) {
      alert(`You lose!`);
      let again = prompt(playAgain).toLowerCase();
      if (again.includes('yes')) {
        gameInit();
      } else {
        alert(`Hope to see you soon again!`);
      }
    }
  }
}

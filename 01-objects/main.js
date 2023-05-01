const riddle ={
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  tries: 3,
  checkAnswer(answer) {
    if (this.tries === 0) {
      alert('Упс, попытки закончились!')
      console.log('Упс, попытки закончились!')
    } else if (answer.toLowerCase() === this.correctAnswer) {
      alert('Ура, Вы угадали загадку!')
      console.log('Ура, Вы угадали загадку!')
    } else {
      this.tries--
      alert('Не правильно, попробуйте еще!')
      console.log('Не правильно, попробуйте еще!')
    }
    console.log(this.tries);
  },
}

window.onload = function() {
  document.getElementById('riddle').innerText = riddle.question
}

function check() {
  const input = document.getElementsByTagName('input')[0]

  const guessedAnswer = input.value

  if (guessedAnswer) {
    riddle.checkAnswer(guessedAnswer)
  }
}

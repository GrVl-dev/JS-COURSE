let secretNum = Math.ceil(Math.random() * 10)
let tries = 0

function guessNum(num) {
  tries++
  if (num === secretNum) {
    alert('Ура, Вы угадали число!')
    secretNum = Math.ceil(Math.random() * 10)
    tries = 0
  } else {
    if (num > secretNum) {
      alert('Неверно, ваше число больше, попробуйте еще!')
    } else {
      alert('Неверно, ваше число меньше, попробуйте еще!')
    }
    
  }
  if (tries === 3){
    alert('Вы исчерпали лимит попыток')
    secretNum = Math.ceil(Math.random() * 10)
    tries = 0
  }
}
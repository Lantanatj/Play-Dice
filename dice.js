// Player 1
let btn = document.querySelector('#btn')
function playGame() {
    location.reload()
    
}

btn.addEventListener('click', playGame)

let randomNumber = Math.ceil(Math.random() * 6)
console.log(randomNumber)

let randomDiceImage = 'dice' + randomNumber + '.jpg';
console.log(randomDiceImage);

let randomImageSource = 'images/' + randomDiceImage
console.log(randomImageSource);

let image = document.querySelectorAll('img')[1]
image.setAttribute('src', randomImageSource)

console.log(image);


let randomNumber2 = Math.ceil(Math.random() * 6)

// console.log(randomNumber)
let randomDiceImage2 = 'dice' + randomNumber2 + '.jpg';

let randomImageSource2 = 'images/' + randomDiceImage2
let image2 = document.querySelectorAll('img')[0]
image2.setAttribute('src', randomImageSource2)

if (randomNumber2 > randomNumber) {
    document.getElementById('winner').innerText = 'Player 1 won'
} else if (randomNumber > randomNumber2) {
    document.getElementById('winner').innerText = 'player 2 won'
} else {
    document.getElementById('winner').innerText = 'There is a tigh'
}


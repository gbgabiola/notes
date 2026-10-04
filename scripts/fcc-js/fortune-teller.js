const fortune1 = 'Your cat will look very cuddly today.';
const fortune2 = 'The weather will be nice tomorrow.';
const fortune3 = 'Be cautious of your new neighbors.';
const fortune4 = 'You will find a new hobby soon.';
const fortune5 = 'It would be wise to avoid the color red today.';

const randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

switch (randomNumber) {
  case 1:
    selectedFortune = fortune1;
    break;
  case 2:
    selectedFortune = fortune2;
    break;
  case 3:
    selectedFortune = fortune3;
    break;
  case 4:
    selectedFortune = fortune4;
    break;
  case 5:
    selectedFortune = fortune5;
    break;
}

console.log(selectedFortune);

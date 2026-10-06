let count = 0;

function cardCounter(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

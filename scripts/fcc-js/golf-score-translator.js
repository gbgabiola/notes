const names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];

function golfScore(par, strokes) {
  if (strokes === 1) return names[0];

  const scoreIndex = strokes - par + 3;

  if (scoreIndex <= 1) return names[1];
  if (scoreIndex >= 6) return names[6];

  return names[scoreIndex];
}

const lunches = [];

function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log('No lunches to remove.');
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log('No lunches to remove.');
  } else {
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log('No lunches available.');
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log('The menu is empty.');
  } else {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
}

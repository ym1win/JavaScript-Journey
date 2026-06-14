let lunches = [];

function addLunchToEnd(lunch, item) {
  lunch.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunch;
}

function addLunchToStart(lunch, item) {
  lunch.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunch;
}

function removeLastLunch(lunch) {
  if (lunch.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = lunch.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return lunch;
}

function removeFirstLunch(lunch) {
  if (lunch.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = lunch.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return lunch;
}

function getRandomLunch(lunch) {
  if (lunch.length === 0) {
    console.log("No lunches available.");
  } else {
    let item = lunch[Math.floor(Math.random() * lunch.length)];
    console.log(`Randomly selected lunch: ${item}`);
  }
}

function showLunchMenu(lunch) {
  if (lunch.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunch.join(", ")}`);
  }
}
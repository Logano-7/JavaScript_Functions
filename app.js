// Exercise 1
function printOdds(count) {
  if (count < 0) {
    console.log("Please provide a non-negative count.");
    return;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOdds(10);

// Exercise 2
function checkAge(userName, age) {
  if (!userName || !age) {
    console.log("Please provide both userName and age.");
    return;
  }

  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("John Doe", 23);

//Exercise 3
function checkCoords(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin (0, 0).");
    } else if (x === 0) {
      console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
  }

checkCoordinates(0, 2);
checkCoordinates(1, 2);
checkCoordinates(-6, 18);

// Exercise 4
function checkTriangleType(side1, side2, side3) {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
      return "Equilateral triangle: all side lengths are equal.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle: two side lengths are equal.";
    } else {
      return "Scalene triangle: all side lengths are different.";
    }
  } else {
    return "Invalid triangle: The given side lengths do not form a valid triangle.";
  }
}

console.log(checkTriangleType(4, 4, 4));
console.log(checkTriangleType(2, 3, 4));
console.log(checkTriangleType(1, 2, 2));
console.log(checkTriangleType(1, 1, 2));

// Exercise 5
function checkDataUsage(planLimit, day, usage) {
  if (day < 1 || day > 30) {
    return "Invalid day. Please provide a day between 1 and 30.";
  }

  let limitPerDay = planLimit / 30;
  const remainingDays = 30 - day;
  const remainingData = planLimit - usage;
  const averageDailyUse = usage / day;
  const projectedUsage = averageDailyUse * 30;

  const message =
    `${day} days used, ${remainingDays} days remaining Average daily use:` +
    ` ${averageDailyUse} GB/day`;

  if (usage < limitPerDay) {
    return message + "You're within your data plan. Keep it up!";
  } else {
    const exceedingMessage =
      `You are EXCEEDING your average daily use (${averageDailyUse} GB/day),` +
      `continuing this high usage, you'll exceed your data plan by ${
        projectedUsage - planLimit
      } GB. To stay below your data plan, use no more than ${
        remainingData / remainingDays
      } GB/day.`;
    return `${message} ${exceedingMessage}`;
  }
}

console.log(checkDataUsage(100, 15, 56));

// Return the heaviest bag riddle.

function pick(bags, scale) {
  const groups: number[][] = [[], [], []];

  // Divide bags into three groups
  for (let i = 0; i < bags.length; i++) {
    const bag: number = bags[i];
    const group: number = i % 3;
    groups[group].push(bag);
  }

  const weight: number = scale.weigh(groups[0], groups[1]);

  // Recursively divide the heavier of the three bags, or return the last item of the heavier bag
  if (weight === -1) {
    if (groups[0].length <= 1) {
      return groups[0][0];
    }

    return pick(groups[0], scale);
  } else if (weight === 1) {
    if (groups[1].length <= 1) {
      return groups[1][0];
    }

    return pick(groups[1], scale);
  } else {
    if (groups[2].length <= 1) {
      return groups[2][0];
    }

    return pick(groups[2], scale);
  }
}

// https://www.codewars.com/kata/526bd612696e23c43a00032e

// bags: number[]. bags.length === 9. [0] <= bags[i] <= 1. All elements are 0 except one is 1.
// Scale: function. A predefined function that weights two groups of bags. -1 indicates the left is heavier, 0 balanced, 1 right is heavier. Scale can only run twice.

// Split the 9 bags into groups of three. Weigh two to determine the heaviest.
// Divide the contents into groups of three. Return the heaviest single bag.
const sortByRank = (arr) => {
  // First step is to make an array of arrays, where the first number is the original array number, and the second is the number multiplied by it's position in the list.
  let numList = [];
  for (let i = 0; i < arr.length; i++) {
    numList.push([arr[i], arr[i] * (i + 1)]);
  }
  // We then make an empty answers array, and loop over a continually ascending number (j), and when one of the numbers multiplied by it's original position matches j, it's pushed to the answer array.
  let answer = [];
  for (let j = 0; j >= 0; j++) {
    console.log({ j });
    for (let i = 0; i < arr.length; i++) {
      console.log({ i });
      if (numList[i][1] === j) {
        answer.push(numList[i][0]);
      }
    }
    // Once the answer array has pushed the numbers from the first array in the correct order, we stop the for statement and returns the answer array.
    if (answer.length === arr.length) {
      break;
    }
  }
  return answer;
};

console.log(sortByRank([23, 2, 3, 4, 5]), "should be: 2, 3, 4, 23, 5");

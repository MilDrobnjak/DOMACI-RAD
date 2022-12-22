// 1.Create a function that returns the sum of missing numbers.
// Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
function sumOfMissingNumbers(array) {
  var sum = 0;
  array = array.sort(function (a, b) {
    return a - b;
  });
  minimum = array[0];
  maximum = array[array.length - 1];

  for (i = minimum; i < maximum; i++) {
    if (!array.includes(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfMissingNumbers([10, 20, 30, 40, 50, 60]));

// 2.Create a function that returns true if smaller arrays can concatenate to
// form the target array and false otherwise.
// Arrays do not have to be sorted (see example #2).
// Arrays should concatenate to create the final array exactly (examples #3 and #4).
// Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array.
function canConcatenate(inputArrays, targetArray) {
  var checkArray = [];
  var checkArray1 = [];
  for (i = 0; i < inputArrays.length; i++) {
    for (j = 0; j < inputArrays[i].length; j++) {
      checkArray.push(inputArrays[i][j]);
      checkArray1.push(inputArrays[i][j]);
    }
  }
  checkArray = checkArray.sort(function (a, b) {
    return a - b;
  });
  checkArray1 = checkArray1.sort(function (c, d) {
    return d - c;
  });

  var max;
  var is_same;
  var is_same1;

  checkArray1.length > targetArray.length
    ? (max = checkArray1.length)
    : (max = targetArray.length);
  for (i = 0; i < max; i++) {
    if (checkArray[i] === targetArray[i]) {
      is_same = true;
    } else {
      is_same = false;
      break;
    }
  }
  for (i = 0; i < max; i++) {
    if (checkArray1[i] == targetArray[i]) {
      is_same1 = true;
    } else {
      is_same1 = false;
      break;
    }
  }
  return !!is_same || !!is_same1 ? true : false;
}
console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));

console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6],
    ],
    [7, 6, 5, 4, 3, 2, 1]
  )
);

console.log(
  canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7], [7]], [1, 2, 3, 4, 5, 6, 7])
);
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
);

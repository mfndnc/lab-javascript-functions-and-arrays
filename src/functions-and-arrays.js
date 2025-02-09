// Iteration #1: Find the maximum
function maxOfTwoNumbers(int1, int2) {
  return int1 < int2 ? int2 : int1;
  // return Math.max(int1, int2);
}

// Iteration #2: Find longest word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];
function findLongestWord(arr) {
  if (arr.length === 0) return null;
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    result = arr[i].length > result.length ? arr[i] : result;
  }
  return result;
}
let iteraction2test = findLongestWord(words);
console.log(`The longest word is: ${iteraction2test}`);

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arr) {
  let result = 0;
  for (let el of arr) {
    result += el;
  }
  return result;
}
let iteraction3test = sumNumbers(numbers);
console.log(`The sumNumbers response is: ${iteraction3test}`);

// Bonus - Iteration #3.1: A generic sum() function

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      result += arr[i].length;
    } else if (typeof arr[i] == 'number' || typeof arr[i] == 'boolean') {
      result += arr[i];
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return result;
}
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
let iteraction3bonus = sum(mixedArr);
console.log(`The sum (BONUS) response is: ${iteraction3bonus}`);

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arr) {
  if (arr.length === 0) return null;
  return sumNumbers(arr) / arr.length;
}
let iteraction4testLevel1 = averageNumbers(numbersAvg);
console.log(`The averageNumbers is: ${iteraction4testLevel1}`);

// Level 2: Array of strings
const wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];
function averageWordLength(arr) {
  if (arr.length === 0) return null;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].length;
  }
  return result / arr.length;
}
let iteraction4testLevel2 = averageWordLength(wordsArr);
console.log(`The averageWordLength is: ${iteraction4testLevel2}`);

// Bonus - Iteration #4.1: A generic avg() function

function avg(arr) {
  if (arr.length === 0) return null;
  let result = sum(arr) / arr.length;
  return Math.round(result * 100) / 100;
}
let iteraction4testbonus = avg(mixedArr);
console.log(`The avg is: ${iteraction4testbonus}`);

console.log(
  'console.log of specific jasmine test that was not working',
  avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false]),
  avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])
);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring',
];
function uniquifyArray(arr) {
  if (arr.length === 0) return null;
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1) resultArr.push(arr[i]);
  }
  return resultArr;
}
let iteraction5test = uniquifyArray(wordsUnique);
console.log(`The uniquifyArray response is: ${iteraction5test}`);

// Iteration #6: Find elements
const wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(arr, str) {
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (str == arr[i]) return true;
  }
  return false;
}
let iteraction6test = howManyTimes(wordsFind, 'machine');
console.log(`The doesWordExist response is: ${iteraction6test}`);

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];

function howManyTimes(arr, str) {
  if (arr.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += str == arr[i];
  }
  return result;
}
let iteraction7test = howManyTimes(wordsCount, 'matter');
console.log(`The howManyTimes response is: ${iteraction7test}`);

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0,
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80,
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50,
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70,
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21,
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69,
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36,
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16,
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54,
  ],
  [
    1,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    1,
    89,
    19,
    67,
    48,
  ],
];

function greatestProduct(matrix) {
  let maxLoop = matrix.length - 3;
  let testmax1 = 0;
  let testmax2 = 0;
  let result = 0;
  for (let i = 0; i < maxLoop; i++) {
    for (let j = 0; j < maxLoop; j++) {
      testmax1 =
        matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      testmax2 =
        matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      result = Math.max(result, testmax1, testmax2);
    }
  }
  return result;
}

let iteraction8bonus = greatestProduct(matrix);
console.log(`The greatestProduct response is: ${iteraction8bonus}`);

const miniMatrix = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];
let iteraction8bonusmini = greatestProduct(miniMatrix);
console.log(`The greatestProduct response is: ${iteraction8bonusmini}`);

// Bonus - Iteration #8.1: Product of diagonals

function greatestProductOfDiagonals(matrix) {
  let maxLoop = matrix.length - 3;
  let testmax1 = 0;
  let testmax2 = 0;
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i < maxLoop && j < maxLoop) {
        testmax1 =
          matrix[i][j] *
          matrix[i + 1][j + 1] *
          matrix[i + 2][j + 2] *
          matrix[i + 3][j + 3];
      }
      if (i >= 3 && j >= 3) {
        testmax2 =
          matrix[i][j] *
          matrix[i - 1][j - 1] *
          matrix[i - 2][j - 2] *
          matrix[i - 3][j - 3];
      }
      result = Math.max(result, testmax1, testmax2);
    }
  }
  return result;
}
let challenge = greatestProductOfDiagonals(miniMatrix);
console.log(`The greatestProductOfDiagonals response is: ${challenge}`);

export const codingChallengesList = [
  {
    challengeId: 1,
    name: "Simple Addition",
    description:
      "**Write a function named `sum`** that takes two numbers as arguments and returns their sum. The function should be able to handle both positive and negative integers, as well as floating-point numbers. Your implementation should focus on accuracy and efficiency, taking into account the different types of numeric inputs it might receive.",
    difficultyOfChallenge: "easy",
    example: `
When given the inputs \`3\` and \`5\` it should return \`8\`

\`\`\`javascript
sum(3, 5) // returns 8
sum(13, -7) // returns 6
sum(0.1, 0.2) // returns 0.3
\`\`\`
    `,
    tests: [
      {
        name: "2+2",
        description: "Should return 4",
        input: [2, 2],
        expected: 4,
      },
      {
        name: "13 + (-7)",
        description: "Should return 6",
        input: [13, -7],
        expected: 6,
      },
    ],
  },
  {
    challengeId: 2,
    name: "Even or Odd",
    description:
      'Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.',
    difficultyOfChallenge: "easy",
    tests: [
      {
        name: "test1",
        description: "Should return odd",
        input: [3],
        expected: "Odd",
      },
      {
        name: "test2",
        description: "Should return even",
        input: [4],
        expected: "Even",
      },
    ],
  },
  {
    challengeId: 3,
    name: "Vowel Count",
    description:
      "Write a function called `countVowels` that returns the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.",
    difficultyOfChallenge: "medium",
    tests: [
      {
        name: "test1",
        description: "Should return 5",
        input: ["abracadabra"],
        expected: 5,
      },
    ],
  },
  {
    challengeId: 4,
    name: "Twice as Old",
    description:
      "Your function takes two arguments,fathersAge -> current father's age (years) and daughtersAge -> current age of his daughter (years). Сalculate how many years ago the father was twice as old as his daughter (or in how many years he will be twice as old).",
    difficultyOfChallenge: "medium",
    tests: [
      {
        name: "test1",
        description: "Should return 0",
        input: [40, 20],
        expected: 0,
      },
      {
        name: "test2",
        description: "Should return 8",
        input: [40, 24],
        expected: 8,
      },
    ],
  },
  {
    challengeId: 5,
    name: "Reverse Words",
    description:
      "Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.",
    difficultyOfChallenge: "medium",
    tests: [
      {
        name: "test1",
        description: "Should return 'sihT si na !elpmaxe'",
        input: ["This is an example!"],
        expected: "sihT si na !elpmaxe",
      },
      {
        name: "test2",
        description: "Should return 'elbuod  secaps'",
        input: ["double  spaces"],
        expected: "elbuod  secaps",
      },
    ],
  },
  {
    challengeId: 6,
    name: "Closest elevator",
    description:
      'Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order): left - The current floor of the left elevator. right - The current floor of the right elevator.call - The floor that called an elevator.It should return the name of the elevator closest to the called floor ("left"/"right").In the case where both elevators are equally distant from the called floor, choose the elevator to the right.You can assume that the inputs will always be valid integers between 0-2',
    difficultyOfChallenge: "medium",
    tests: [
      {
        name: 'If the left elevator is closer to the call, should return "left"',
        description: "Should return left",
        input: [0, 1, 0],
        expected: "left",
      },
      {
        name: 'If the right elevator is closer to the call, should return "right"',
        description: "Should return right",
        input: [0, 1, 1],
        expected: "right",
      },
    ],
  },
  /* {
    challengeId: 7,
    name: "The suffixer",
    description:
      "Create a function suffixer that, given a string suffix, returns a function that prepends the suffix to a given str.",
    difficultyOfChallenge: "medium",
    tests: [
      { name: "test1", input: ["spot"], expected: "spotify" },
      { name: "test2", input: ["shop"], expected: "shopify" },
    ],
  }, */
  {
    challengeId: 8,
    name: "How many smaller than me?",
    description:
      "Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.",
    difficultyOfChallenge: "hard",
    tests: [
      {
        name: "test1",
        description: "Should return [4, 3, 2, 1, 0]",
        input: [[5, 4, 3, 2, 1]],
        expected: [4, 3, 2, 1, 0],
      },
      {
        name: "test2",
        description: "Should return [1, 1, 0]",
        input: [[1, 2, 0]],
        expected: [1, 1, 0],
      },
    ],
  },
  {
    challengeId: 10,
    name: "Fibonacci",
    description:
      "Write a function fibonacci(element) that takes an integer element and returns the element-th number of the Fibonacci sequence where: fibonacci(0) is 0, fibonacci(1) is 1 and so on",
    difficultyOfChallenge: "medium",
    tests: [
      {
        name: "test1",
        description: "Should return 0",
        input: [0],
        expected: 0,
      },
      {
        name: "test2",
        description: "Should return 55",
        input: [10],
        expected: 55,
      },
    ],
  },
];

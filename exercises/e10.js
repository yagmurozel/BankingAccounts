// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {

  let obj = {};
  let new_arr = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];

    for (let key in obj) {
      let value = obj[key];
      if ((key === 'name') && ((value.includes(letter)) || value.includes(letter.toUpperCase()))) {
        new_arr.push(value);
      }
    }
  }
  return new_arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

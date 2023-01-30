
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {

  let obj = {};
  let new_arr = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];

    for (let key in obj) {
      let value = obj[key];
      if (key === 'deposits') {
        for (let i = 0; i < value.length; i++) {
          let num = value[i];
          if (num > 100) {
            new_arr.push(num);
          }
        }
      }
    }
  }
  return new_arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

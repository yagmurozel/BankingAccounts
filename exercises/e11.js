// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {

  let obj = {};
  let new_arr = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    let sum = 0;

    for (let key in obj) {
      let value = obj[key];
      
      if (obj.hasOwnProperty('withdrawals') === false) {
        sum = 0;
      }
      else if (key === 'withdrawals') {
        for (let i = 0; i < value.length; i++) {
          let num = value[i];
          sum += num;
        }
      }
    }
    new_arr.push(sum);
  }

  return new_arr;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

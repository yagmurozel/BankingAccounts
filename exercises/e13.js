
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {

  let obj = {};
  let new_arr = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    let sum = 0;

    if (obj.hasOwnProperty('deposits') === false) {
      new_arr.push(obj);
    }
    
    for (let key in obj) {
      let value = obj[key];
      if (key === 'deposits') {
        for (let i = 0; i < value.length; i++) {
          let deposit = value[i];
          sum += deposit;
        }
        if ((sum < 2000)) {
          new_arr.push(obj);
        }
      }
    }  
  }
  return new_arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(array) {

  let new_arr = [];
  let new_obj = {};

  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    
    for (let key1 in obj) {
        for (let key2 in obj) {
          if ((key1 === 'name') && ((key2 === 'balance') && (obj[key2] === 0.0))) {
            new_obj[key1] = obj[key1];
            new_obj[key2] = obj[key2];
            new_arr.push(new_obj[key1]);
          }
        }  
      }
    }
      return new_arr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

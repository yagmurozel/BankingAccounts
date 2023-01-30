
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {

  let max = -Infinity;
  let obj = {};
  let new_arr = [];
  let valuesArray = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    
    for (let key in obj) {
      if (key === 'balance') {
        let value = obj[key];
        valuesArray.push(value);
      }
    }  
  }

  for (let i= 0; i< valuesArray.length; i++) {
    if (valuesArray[i] > max) { 
      max = valuesArray[i];
    } 
  }

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    
    for (let key in obj) {
      if ((key === 'balance') && (obj[key] === max)) {
        new_arr.push(obj);
      }
    }  
  }
  return new_arr;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

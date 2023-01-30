// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {

  let obj = {};
  let new_arr = [];
  let min = Infinity;
  let secondMin = Infinity;
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
    if (valuesArray[i]< min) {
      secondMin = min;
      min = valuesArray[i]; 
      } else if (valuesArray[i]< secondMin) {
        secondMin = valuesArray[i]; 
    }
  }

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    
    for (let key in obj) {
      if ((key === 'balance') && (obj[key] === secondMin)) {
        new_arr.push(obj);
      }
    }  
  }
  return new_arr;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

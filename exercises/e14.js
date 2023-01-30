
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  
  let obj = {};
  let new_arr = [];

  for (let i = 0; i < array.length; i++) {
    obj = array[i];
    let sumOfDeposits = 0;
    let sumOfWithdrawals = 0;
    let balance;

    for (let key in obj) {
      let value = obj[key];
      if (key === 'deposits') {
        for (let i = 0; i < value.length; i++) {
          let num = value[i];
          sumOfDeposits += num;
        }
      } else if (key === 'withdrawals') {
        for (let i = 0; i < value.length; i++) {
          let num = value[i];
          sumOfWithdrawals += num;
        }
      }
      balance = sumOfDeposits - sumOfWithdrawals;
    }
    
    for (let key in obj) {
      if ((key === 'balance') && (obj[key] !== balance)) {
        new_arr.push(obj);
      }
    }
  }
  return new_arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

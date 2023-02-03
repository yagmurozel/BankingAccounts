
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  
  let new_arr = [];

  for (let obj of array) {
    let sumOfDeposits = 0;
    let sumOfWithdrawals = 0;
    let balance;

    if (obj.deposits) {
      for (let deposit of obj.deposits) {
        sumOfDeposits += deposit;
      }
    }
    if (obj.withdrawals) {
      for (let withdrawal of obj.withdrawals) {
        sumOfWithdrawals += withdrawal;
      }
    }
    balance = sumOfDeposits - sumOfWithdrawals;
    
    if (obj.balance !== balance) {
      new_arr.push(obj);
    }
  }
  return new_arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

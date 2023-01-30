
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {

  let new_arr = [];
  let sub_arr1 = [];
  let sub_arr2 = [];
  
  for (let i = 0; i < array.length; i++) {

    let ele = array[i];


      if ((ele.indexOf('a') > -1) && (sub_arr1.indexOf(ele) === -1)) {
          sub_arr1.push(ele);
        }
      if ((ele.indexOf('a') === -1) && (sub_arr2.indexOf(ele) === -1)) {
          sub_arr2.push(ele);
        }
     
  }
  new_arr.push(sub_arr1);
  new_arr.push(sub_arr2);
  return new_arr;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

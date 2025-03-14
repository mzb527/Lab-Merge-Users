const datejs = require('datejs'); // Import datejs (make sure it's installed)

function combineUsers(...args) {
  // 3. Initialize return object
  const combinedObject = {
    users: [] // Start with an empty array for users
  };

  // 4. Loop through args
  for (const userArray of args) {
    // 5. Merge arrays using the spread operator
    combinedObject.users.push(...userArray);
  }

  // 6. Get today's date and set it to merge_date
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // 7. Return the combined object
  return combinedObject;
}

// Example usage:
const users1 = ["Michael", "Sarah"];
const users2 = ["John", "Emily"];
const result = combineUsers(users1, users2);

console.log(result);
// Output example:
// {
//   users: ["Michael", "Sarah", "John", "Emily"],
//   merge_date: "3/14/2025" // (or today's date in M/d/yyyy format)
// }



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
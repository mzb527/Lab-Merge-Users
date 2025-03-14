const datejs = require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: [] // Start with an empty users array
  };

  // Loop through args to isolate each array
  for (const userArray of args) {
    combinedObject.users.push(...userArray); // Merge arrays into the users attribute
  }

  // Add today's date in the format M/d/yyyy to merge_date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Return the combined object
  return combinedObject;
}

module.exports = { combineUsers };

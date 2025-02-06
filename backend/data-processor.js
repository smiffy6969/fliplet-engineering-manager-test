// Sample dataset (users.json)
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: null },
  { id: 3, name: "Alice", email: "alice@email.com" },
];

// Mock API to fetch missing data
async function fetchUserData(id) {
  return { email: `user${id}@email.com` };
}

// Optimize this function:
async function processUsers(users) {
  let results = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (!user.email) {
      let enriched = await fetchUserData(user.id);
      user.email = enriched.email;
    }
    results.push(user);
  }
  return results;
}

module.exports = processUsers;
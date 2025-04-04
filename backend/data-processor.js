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
async function processUsers(users, size = 1000) {
  // setup
  const results = [];
  const match = new Map(); // use map, could also use set but this preverses the object
  const batches = Math.ceil(users.length / size);

  // loop through a batch of users to limit the number of concurrent requests (network traffic maybe?)
  for (let idx = 0; idx < batches; idx++) {
    const start = idx * size;
    const end = Math.min(start + size, users.length);
    const batch = users.slice(start, end);

    // collect promises
    const promises = batch.map(async (user) => {
      if (!user.email) {
        let enriched = await fetchUserData(user.id).catch(() => null);
        if (!enriched) return null;

        user.email = enriched.email;
      }

      return user;
    });

    // resolve promises in parallel and prune fails
    const resolved = (await Promise.all(promises)).filter(Boolean);

    // collect results
    for (const user of resolved) {
      if (!user.email || match.has(user.email)) continue;

      match.set(user.email, user);
      results.push(user);
    }
  }

  return results;
}

module.exports = processUsers;

// processUsers(users).then((res) => console.log(res));
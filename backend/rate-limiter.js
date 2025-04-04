const rateLimit = {}; // Object to track requests per tenant

function rateLimiter(req, res, next) {
  const tenant = req.headers["x-tenant-id"];
  if (!tenant) return res.status(400).json({ error: "Missing tenant ID" });

  if (!rateLimit[tenant]) {
    rateLimit[tenant] = { count: 1, startTime: Date.now() };
  } else {
    let elapsed = Date.now() - rateLimit[tenant].startTime;
    if (elapsed > 60000) { // Reset every minute
      rateLimit[tenant] = { count: 1, startTime: Date.now() };
    } else {
      rateLimit[tenant].count++;
      if (rateLimit[tenant].count > 100) {
        return res.status(429).json({ error: "Rate limit exceeded" });
      }
    }
  }
  next();
}

module.exports = rateLimiter;

const express = require('express');
// const rateLimiter = require('./rate-limiter'); // to use from another file

const app = express();

app.use(rateLimiter); // implementing from same file

app.get('/', (req, res) => {
  res.json({ message: 'Data from API' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
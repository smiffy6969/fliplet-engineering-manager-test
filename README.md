# Engineering Manager Test

## 📜 Instructions

### **How to Take the Test**
1. **Fork this repository** (do NOT submit a PR).
2. Complete the tasks in the appropriate files.
3. **Commit & push your changes** to your forked repo.
4. **Share GitHub access** with `<your-email@company.com>`.
5. **Log AI usage:**  
   - **Provide all AI prompts used** (copy-paste them into `ai-prompts.md`).  
   - **Summarize AI impact** (write about it in your README summary).  
   - **List any AI-powered IDE tools used** (e.g., GitHub Copilot, Cursor, ChatGPT in VS Code).  

---

## 📂 Repository Structure
```
/engineering-manager-test/
│── README.md  # Instructions & submission process
│── ai-prompts.md  # All AI prompts used
│── /backend/  # Backend coding tasks (Node.js, Express.js, AWS, Terraform)
│── /frontend/  # Frontend Vue.js tasks
│── /docs/  # PRD review & tech specs
│── /solutions/  # Written explanations (AWS debugging, security, scaling)
```

## ✅ Evaluation Criteria
Your submission will be judged on:
1. **Technical Depth** – Demonstrates strong knowledge & reasoning.
2. **Code Quality** – Readability, efficiency, maintainability.
3. **AI Usage** – Allowed, but critical thinking must be evident.
4. **AI Prompting Skill** – Ability to craft meaningful prompts and refine AI outputs.
5. **Time Management** – Prioritization of effort within the given timeframe.

---

# 🛠️ Engineering Manager Tasks

## **1️⃣ JavaScript/TypeScript Performance Task (30 min)**
### **Task:**  
Optimize the function below for handling large datasets **efficiently**.

### **Scenario:**  
Your company processes user records but must:
- Deduplicate users.
- Enrich missing email data asynchronously via an API.
- Optimize performance when handling **1 million+ users**.

### **File to Edit:**  
`/backend/data-processor.js`

```js
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
```

---

## **2️⃣ Express.js Rate Limiter Middleware (25 min)**
### **Task:**  
Implement a middleware to **limit API requests per tenant (organization).**

### **Scenario:**  
Your SaaS product allows **100 requests per minute per tenant**.

### **File to Edit:**  
`/backend/rate-limiter.js`  

```js
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
```

---

## **3️⃣ Vue.js Drag-and-Drop Component (25 min)**
### **Task:**  
Implement a **drag-and-drop UI** that allows users to add UI components to a web page preview.

### **File to Edit:**  
`/frontend/drag-drop.vue`  

```vue
<template>
  <div>
    <h3>Drag & Drop Components</h3>
    <div class="library">
      <button draggable="true" @dragstart="dragStart('Text')">Text</button>
      <button draggable="true" @dragstart="dragStart('Button')">Button</button>
    </div>
    <div class="preview" @drop="drop" @dragover.prevent>
      <p v-for="item in items" :key="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { items: [] };
  },
  methods: {
    dragStart(type) {
      event.dataTransfer.setData("text/plain", type);
    },
    drop(event) {
      let type = event.dataTransfer.getData("text/plain");
      this.items.push(type);
    }
  }
};
</script>

<style>
.library { margin-bottom: 10px; }
.preview { min-height: 100px; border: 1px dashed black; padding: 10px; }
</style>
```

---

## **4️⃣ Infrastructure as Code (Terraform) (25 min)**
### **Scenario:**  
You need to deploy an **ECS Fargate cluster** with a **load balancer**.

### **File to Edit:**  
`/backend/infra.tf`  

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_ecs_cluster" "main" {
  name = "ecs-cluster"
}

resource "aws_lb" "main" {
  name               = "ecs-load-balancer"
  internal           = false
  load_balancer_type = "application"
}

resource "aws_ecs_service" "service" {
  name            = "app-service"
  cluster         = aws_ecs_cluster.main.id
  desired_count   = 2
  launch_type     = "FARGATE"
}
```

---

## **7️⃣ PRD Review & Critique (15 min)**
### **Scenario:**  
Your product team wrote a **bad PRD**. Find **3 critical issues**.

### **File to Edit:**  
`/solutions/prd-review.md`  

```md
# PRD Review

## 🚨 Identified Issues
1. **Security Risk** – No authentication mentioned.
2. **Scalability Issue** – No plan for handling growth.
3. **Unclear Acceptance Criteria** – Feature scope is ambiguous.

## 🔧 Proposed Fixes
- Add authentication details.
- Define a scaling strategy.
- Provide detailed success criteria.
```

---

## 🎯 **Final Submission Notes**
✔️ **Fork this repo** (DO NOT create a public PR).  
✔️ **Implement solutions in the designated files.**  
✔️ **Commit & push your work.**  
✔️ **Share GitHub access with `<your-email@company.com>`.**  

🚀 **Good luck!**

---

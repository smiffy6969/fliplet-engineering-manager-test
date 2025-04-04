### Data Processor

I use cursor at present anyway, but it can get in the way alot so only used auto complete for replacing like names such as user. to users[i].
I used google to search for efficency saving on map over set.
wanted to work promise.all into equation for some parallel gains, and simple batching put in to stop memory issues with lage datasets (could have put a limit in too i guess).

### Rate Limiter

I had to read this several times...

"Implement a middleware to **limit API requests per tenant (organization).**"

it already does works as a middleware, and not asking for it to be improved... implement, as in show how ot use it???

again no prompts needed, just implementing with express use which next passes on to the next middleware in the express chain

### Drag and Drop

Again, a little confused.... says edit the drag drop file but its a fully functional component to spec file
Asks to implement it but implementing it by altering that nice component file is messy so i pulled it in to a basic bare bones app setup

"Implement a **drag-and-drop UI** that allows users to add UI components to a web page preview."

this componnet already works, just needs adding a vue app. Does not say improve, and it does to the letter whats asked, implement it? as in add it to a basic vue app?

rather than butcher this file which works as described, i will implement and pull it in to a basic app in the frontend folder

```bash
npm create vue@latest
```

follow the promtps and out it pops... adjusted the paths to fit in flat folder and added in the drag and drop component

this would be better organised in a full project setup structure.

### infra.tf

Now this one requires some prompting, as first off I have no way to test locally nor a setup to hand to run it on.
I have altered TF in the past at Novuna but am no expert. I have however spent a lot of time with CloudFormation (my cerberusmvc project uses it)

So i literally ask gemini the question and give it the incomplete code as i have no other means of verifying it at present, why use gemini, i like it and its a got a nice name! I could ask cursor and claude but lets spice it up a bit.

after getting the intial TF set, i use cursor and claude to check it and verify it. thi swould be enough for me to through at a test setup somewhere.

### PRD Review

ASked me to alter a file that did not exist, so i altered `docs/PRD-to-review.md` and not `/solutions/prd-review.md`

It asked me to review the PRD but tehre really wasn't any context as a PRD, just three bullets i guessed where the issues already, so i ouldn't really think what to do but expand on them as it was a little unclear what was needed.

### AWS Debugging Scenario

I provided steps I may take to first, fallback, second fix and third learn


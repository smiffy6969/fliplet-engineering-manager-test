# AI Prompt Logging

## 📝 AI Usage Summary

### Data Processor

I use cursor at present anyway, but it can get in the way alot so only used auto complete for replacing like names such as user. to users[i].
I used google to search for efficency saving on map over set.
wanted to work promise.all into equation for some parallel gains, and simple batching put in to stop memory issues with lage datasets (could have put a limit in too i guess).

### Rate Limiter

no prompting needed, just add it in to the chain of middleware

### Drag and Drop

no prompting needed, just run the command to spawn a new vue app with vite and pull in the component

### infra.tf

Not an export with TF (have used CF a fair bit) so i paste in incomplete code and question to gemini 2.0 (code seems to be better on these later models)

returns with new terraform code and updates file...

switch to cursor...

"will this work?"

```prompt response
Let me analyze the Terraform configuration to check if it will work. I'll look for any potential issues or missing components.
The configuration appears to be setting up a basic ECS Fargate service with an Application Load Balancer. Here's my analysis:

VPC and Networking: ✅
VPC with CIDR 10.0.0.0/16
Two public subnets in different AZs
Internet Gateway and route tables properly configured
Security group for the load balancer with proper ingress/egress rules

Load Balancer: ✅
Application Load Balancer configured correctly
Listener on port 80
Target group with health check
Proper security group allowing HTTP traffic

ECS Configuration: ✅
Fargate cluster
Task definition with nginx container
Service with proper network configuration
Desired count of 2 tasks

Potential Issues/Considerations:
The security group for the ECS tasks is not explicitly defined. The service is using the load balancer's security group, which might be too permissive for the actual tasks.
No IAM roles are defined for the ECS tasks, which might be needed depending on what the application does.
The nginx container is used as a placeholder - you'll want to replace this with your actual application container.

The basic infrastructure setup looks correct and should work for a simple web application. However, I would recommend:

Adding a separate security group for the ECS tasks with more restrictive rules
Adding IAM roles if your application needs AWS service access
Replacing the nginx container with your actual application container
Consider adding HTTPS support with an SSL certificate
Would you like me to help you implement any of these improvements?
```

"please apply your 4 recommendations"

update to code

"will this work?"

```prompt response
Let me check the current state of the infrastructure configuration.
The configuration has been updated with all the recommended improvements:

Security Groups: ✅
Dedicated security group for ECS tasks
Proper ingress/egress rules
Load balancer security group properly configured

IAM Roles: ✅
ECS task execution role created
Proper policy attachments
Correct permissions for ECR and CloudWatch

HTTPS Support: ✅
ACM certificate configured
HTTPS listener on port 443
HTTP to HTTPS redirect
Proper SSL policies

Container Configuration: ✅
ECR repository configured
CloudWatch logging setup
Proper task execution role
Correct container definitions

Networking: ✅
Public IP assignment configured
Proper subnet associations
Correct security group assignments

The configuration should work now, but there are two important things you need to do before applying it:
Replace "your-domain.com" in the ACM certificate with your actual domain name
Push your application container to the ECR repository before deploying
Would you like me to help you with either of these steps?
```

---

### PRD Review

Only used cursor for spelling, as I am dyslexic and spelling can look fine at times.
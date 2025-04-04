# PRD Review Task

## 📝 Instructions
Review the following PRD and identify **3 critical issues**.

## Example PRD
### Feature: User Profile Management
1. Users should be able to update their name and email.
2. There is no authentication mechanism specified.
3. No mention of error handling.

## ✏️ Your Review
- Issue 1: There is only mention of updating name and email. In a the real world, this would also include things like password and would also need a form of verification before changing anything sensitive, to ensure the user is who they say they are. Check this request over for additional features that may also be required alongside this and also ensure we do not already implmenet some of these already (in which case we can combine and re use / improve existing code alongside).
- Issues 2: Lack of authentication is a worry, we must not perform any task on a back end without basic auth, we must also not allow sensitive data to be adjusted without further enhanced auth. Please check over all existing RBAC permissions to also see what is currently covered with existing permissions as well as include new permissions that could be needed.
- Issue 3: The PRD makes no mention of error handling. This is problematic because user input can be invalid, incomplete or just innacurate (e.g., incorrect email format, which needs to account ofr things like p@ and .co), and the system needs to handle such errors gracefully and provide informative feedback to the user in addion to logging any potentioal isuues for us and potential security related issues arround RBAC kickbacks which could point to missuse and or hijacking attempts.



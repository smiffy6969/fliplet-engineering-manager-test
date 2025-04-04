# AWS Debugging Task
## 🔍 Problem
Error during Postgres upgrade.

ERROR: Extension incompatible: some_extension v1.3 not compatible with Postgres v14

## 🛠️ Resolution Plan
1. Deal with the fire first and foremost, revert back to v13 if you can if you do not have that kind of setup then its fire hats time
2. Get hold of a local instance of v13 or a cloud instance like a testing instance or live if your a really scary person
3. verify the failure locally/cloud before you fix it or just double chekc theres a huge fire on the production instance if your have no contingency plan
4. if fails, list all extensions installed with pg_available_extensions to see whats to be installed and pg_extension for what is installed
5. use the delta to check version numbers for compatibility on none loaded extensions
6. try to upgrade these exntensions
7. find alternatives to these extensions if not upgradable or remove
8. if upgrading not fixed, replacing with alternative or removal is needed requiring a code up date more than likely
9. test
10. lessons learned, why was pg_upgrade checks not listing these errors
11. if all extensions where not covered via this why where checks on those extensions not performed as some can provide their own upgrade scripts
12. why was this not picked up during test, or locally or in a cloud staging environment

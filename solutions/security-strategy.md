# Security Strategy: JWT Expiry Fix
## Problem
Tokens never expire.

## Solution

need to implment short lived tokens

## Secure Authentication Flow with JWT Expiry Fix

**Proposed Authentication Flow:**

* User provides auth.
* Server authenticates the user.
* Server generates a short-lived access token for say 30min and a longer refresh token
* if the server is not authenticated, it will return a 401 error
* if the server is authenticated, it will return the access token
* several requests later...
* if access token is less than 30 then fine
* if the clients access token is outdated but no more than 7 days, send back a refresh token else fail
   * if the user receives a refresh token, use it to fetch a new short lived token
   * if this is valid then retry the original request with the new token and the user need never know tokens where recycled
* if the clients access token is outdated and its longer than 7 days, send back a 401 error require a new login (this should all actually happen in middleware and a basic verify check on load)

the user interface should at service layer have a retry mechnicsm for when a kick back happenes with a refresh token so it may handle and store ht enew short lived token and then retry the original request, you can do this with axios, and also fetch included with browsers.

This way expired tokens greater than 30min are auto refreshed and the user never knows, but this will only happen within the 7 day grace period.

How would this be introduced without causing issues with current users? verify endpoints to verify a user on load, could be used ot replace hte long lived tokens. if a verify endpoint is never hit on load of the app fornt end that needs to be introduced. this will replace the long lived tokens with a short lived token.

JWT exp would be used for expiration of the short lived token.
JWT iat would be used for 7 days grace period for auto issuing refresh tokens.
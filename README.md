# Intro
This is my first keycloak project, running on this repository.

# Setup keycloak server
Make sure you have SDK 17 set up in your environment variables.
Download keycloak (ZIP) server on the official website https://www.keycloak.org/downloads.
Extract the keycloak folder. Navigate with the cmd to the keycloak/bin folder. Run "kc.bat start-dev".
Now that the Server is running, go to http://localhost:8080 and create an account, then login with it in the Administration Console.
## Add realm
Add realm: 
- Name: test-realm
## Add Users
Add user: 
- Username: test-user-1
- Email Verified: ON
## Add Clients
Create: 
- Client ID: angular-client
- Root URL: http://localhost:4200






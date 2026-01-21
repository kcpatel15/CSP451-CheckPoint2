# User Authentication Documentation

Branch name: feature/user-authentication

## Feature overview
This branch adds a basic login feature to the project.
The goal is to demonstrate how authentication logic and
documentation are organized in a Node and Express application.

The login process is intentionally simple and does not use
a real database or external authentication service.

## How it works
- User credentials are sent to a mock login endpoint
- The server checks that required fields are provided
- A success or error message is returned as JSON

## Input checks
- Email field must not be empty
- Password field must not be empty

## Password toggle
The password field includes a Show/Hide toggle button to let the user view the password temporarily while typing.

## Purpose
This feature is designed for learning and practice only.
It shows how routes, controllers, and documentation work together
in a typical web application.

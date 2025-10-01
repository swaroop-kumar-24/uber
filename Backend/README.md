# Backend API — Users

This document describes the user-facing authentication endpoints implemented in the Backend service. It covers request/response shapes, validation rules, and example usage for the following endpoints:

- POST /users/register — create a new user
- POST /users/login — authenticate an existing user

Base notes

- Base path: the router for these endpoints is mounted under `/users` in the application. So the full paths are `/users/register` and `/users/login`.
- Content type: application/json for request bodies.

## POST /users/register

Purpose
: Create a new user account. The endpoint validates input, hashes the password, stores the user, and returns a JSON Web Token (JWT) for subsequent authenticated requests.

Success

- Status: 201 Created
- Response body: the created user (public fields only) and a JWT token.

Request

- Headers:
  - Content-Type: application/json
- JSON body schema (example):

```json
{
  "fullname": {
    "firstname": "string (min 3 chars)",
    "lastname": "string (optional, min 3 chars)"
  },
  "email": "string (valid email)",
  "password": "string (min 6 chars)"
}
```

Validation rules (applied server-side)

- `fullname.firstname`: required, minimum 3 characters
- `fullname.lastname`: optional, if present minimum 3 characters
- `email`: required, must be a valid email format
- `password`: required, minimum 6 characters

Success response example (201):

```json
{
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
  },
  "token": "<jwt_token_here>"
}
```

Errors

- 400 Bad Request: validation failed. Response contains an `errors` array from `express-validator` with `msg`, `param` and `location`.
- 409 Conflict: duplicate email (this is returned by MongoDB when `email` uniqueness is violated — your app may map this to 400 or 409 depending on error handling).
- 500 Internal Server Error: unexpected failure.

Error example (validation, 400):

```json
{
  "errors": [
    { "msg": "Invalid email format", "param": "email", "location": "body" },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Notes and tips

- The endpoint returns the user object but the password is never returned.
- The server hashes passwords with bcrypt before saving (see `models/user.model.js`).

---

## POST /users/login

Purpose
: Authenticate a user with email and password. Successful authentication returns the user (public fields) and a JWT token.

Success

- Status: 200 OK
- Response body: the user (public fields only) and a JWT token.

Request

- Headers:
  - Content-Type: application/json
- JSON body (example):

```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

Validation rules

- `email`: required, must be valid email format
- `password`: required, minimum 6 characters

Success response example (200):

```json
{
  "user": {
    "_id": "<user_id>",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane.doe@example.com"
  },
  "token": "<jwt_token_here>"
}
```

Errors

- 400 Bad Request: validation errors (see `express-validator` style `errors` array).
- 401 Unauthorized: invalid credentials (wrong email or password).
- 500 Internal Server Error: unexpected failure.

Error example (invalid credentials, 401):

```json
{ "message": "Invalid email or password" }
```

Security and usage

- Use the returned JWT in the `Authorization` header for protected routes: `Authorization: Bearer <token>`.
- Keep `JWT_SECRET` (used to sign tokens) secure and never commit it to source control. Configure it via environment variables in production.

Implementation notes

- Passwords are hashed using bcrypt (see `models/user.model.js`).
- The code performs input validation using `express-validator` in `routes/user.routes.js`.
- On registration the app uses `user.services.createUser` to persist the new user and then calls `generateAuthToken()` on the model instance to create a token.

If you want, I can also:

- Add curl examples for quick manual testing
- Add an OpenAPI (Swagger) specification file for these endpoints
- Add a short troubleshooting section that lists common errors and how to reproduce them locally

---

Last updated: 2025-09-30

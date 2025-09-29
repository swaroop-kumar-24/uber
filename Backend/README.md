# API Documentation

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns the user details along with an authentication token.

### Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

| Field                | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| `fullname.firstname` | String | Yes      | First name of the user (minimum 3 characters). |
| `fullname.lastname`  | String | No       | Last name of the user (minimum 3 characters).  |
| `email`              | String | Yes      | Email address of the user (must be valid).     |
| `password`           | String | Yes      | Password for the user (minimum 6 characters).  |

### Validation Rules

- `email`: Must be a valid email format.
- `password`: Must be at least 6 characters long.
- `fullname.firstname`: Must be at least 3 characters long.

### Response

#### Success Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "<firstname>",
        "lastname": "<lastname>"
      },
      "email": "<email>"
    },
    "token": "<auth_token>"
  }
  ```

#### Error Responses

- **Status Code**: `400 Bad Request`

  - **Reason**: Validation errors in the request body.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "<error_message>",
          "param": "<field_name>",
          "location": "body"
        }
      ]
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: Unexpected server error.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response

#### Success

```json
{
  "user": {
    "_id": "64f1c2e7b5d3c2a1b2c3d4e5",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYxYzJlN2I1ZDNjMmExYjJjM2Q0ZTUifQ.abc123"
}
```

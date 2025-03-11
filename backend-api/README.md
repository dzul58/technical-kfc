# Authentication and User Management API Documentation

## 1. Overview

This API provides functionalities for user registration and login using Golang, Gin, GORM, and JWT for authentication. It allows users to create accounts and securely log in to access protected resources.

## 2. Installation

### Prerequisites

- Go (version 1.18 or higher)
- PostgreSQL database

### Steps to Install

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dzul58/technical-kfc.git
   cd backend-api
   ```

2. **Initialize Go Modules**:

   ```bash
   go mod init auth-app
   ```

3. **Install Required Dependencies**:

   ```bash
   go get github.com/gin-gonic/gin
   go get gorm.io/gorm
   go get gorm.io/driver/postgres
   go get github.com/joho/godotenv
   go get github.com/dgrijalva/jwt-go
   go get golang.org/x/crypto/bcrypt
   ```

4. **Create a `.env` File**:

   Create a file named `.env` in the root directory with the following content:

   ```env
   JWT_SECRET=kfctest
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=kfctest
   DB_HOST=localhost
   DB_PORT=5432
   ```

5. **Run the Application**:

   ```bash
   go run main.go
   ```

## 3. Environment Variables

The application requires the following environment variables to be set in the `.env` file:

- `JWT_SECRET`: Secret key used for signing JWT tokens.
- `DB_USER`: Database username.
- `DB_PASSWORD`: Database password.
- `DB_NAME`: Database name.
- `DB_HOST`: Database host.
- `DB_PORT`: Database port.

## 4. API Endpoints

### Register User

- **Endpoint**: `POST /register`
- **Request Body**:

  ```json
  {
    "username": "test123",
    "password": "yourpassword"
  }
  ```

- **Response**:

  - **201 Created**:

    ```json
    {
      "id": 2,
      "username": "test123"
    }
    ```

  - **400 Bad Request**:

    ```json
    {
      "error": "Error message"
    }
    ```

### Login User

- **Endpoint**: `POST /login`
- **Request Body**:

  ```json
  {
    "username": "test123",
    "password": "yourpassword"
  }
  ```

- **Response**:

  - **200 OK**:

    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE5NzAwMzIsImlkIjoxfQ.MQokEZS_or5VqimmPOVTye_B_A-4VL5grR3DQcUBByo"
    }
    ```

  - **401 Unauthorized**:

    ```json
    {
      "error": "Invalid credentials"
    }
    ```

## 5. Usage

1. **Register a New User**: Send a POST request to `/register` with the username and password in the request body.
2. **Log In**: Send a POST request to `/login` with the username and password. If successful, you will receive a JWT token that can be used for authenticated requests.

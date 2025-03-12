# Technical Test KFC Setup

## Overview

This project consists of a backend API built with Golang and a frontend application built with Next.js. This document provides instructions on how to set up and run both parts of the application.

## 1. Backend API Setup

### Prerequisites

- Go (version 1.18 or higher)
- PostgreSQL database

### Steps to Setup Backend

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

## 2. Frontend Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Steps to Setup Frontend

1. **Navigate to Frontend Directory**:

   ```bash
   cd ../frontend-kfc
   ```

2. **Install Required Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm run dev
   ```

4. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints

### Backend API Endpoints

- **Register User**: `POST /register`
- **Login User**: `POST /login`

### Frontend Pages

- **Register Page**: `/register`
- **Login Page**: `/login`
- **Home Page**: `/home`

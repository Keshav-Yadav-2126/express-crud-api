# 🧩 Express CRUD API – User Management

A simple CRUD (Create, Read, Update, Delete) API built with **Node.js** and **Express.js** that allows managing users with unique IDs generated using the `uuid` package. API testing is done using **Postman**.

---

## 🚀 Features

- ✅ **Add User** – Create a new user with a UUID.
- 📋 **Get All Users** – Fetch a list of all users.
- ✏️ **Update User** – Modify existing user details.
- ❌ **Delete User** – Remove a user from the system.

---

## 📬 API Endpoints

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/users`       | Get all users                   |
| POST   | `/api/users`       | Add a new user                  |
| GET    | `/api/users/:id`   | Get a specific user by ID       |
| PUT    | `/api/users/:id`   | Update a user by ID             |
| DELETE | `/api/users/:id`   | Delete a user by ID             |


## 🛠️ Built With

- [Express.js](https://expressjs.com/) – Web framework for Node.js
- [uuid](https://www.npmjs.com/package/uuid) – For generating unique user IDs
- [Postman](https://www.postman.com/) – API testing tool

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/express-crud-api.git
cd express-crud-api

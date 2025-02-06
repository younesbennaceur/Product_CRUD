# Product Management API

This project is a product management API built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It allows you to create, read, update, and delete products.

---

## **Features**

- **Create a product**: Add a new product to the database.
- **Read products**: Get a list of all products or a specific product by its ID.
- **Update a product**: Modify the details of an existing product.
- **Delete a product**: Remove a product from the database.

---

## **Technologies Used**

- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for building APIs.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **pnpm**: Fast and disk-space-efficient package manager.

---

## **Prerequisites**

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (v7 or higher)
- [MongoDB](https://www.mongodb.com/) (local or a cloud instance like MongoDB Atlas)

---

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-management-api.git
   cd product-management-api

## **Installation**

1. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

2. Set up environment variables:

   - Create a `.env` file in the root of the project.
   - Add the following variables:

     ```env
     MONGO_URI=mongodb://localhost:27017/productdb
     PORT=5000
     ```

   - Replace `mongodb://localhost:27017/productdb` with your MongoDB URI.

---

## **Usage**

1. Start the development server:

   ```bash
   pnpm run dev
   ```

   The server will be accessible at: `http://localhost:3000`.

2. Use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.

---

## **API Endpoints**

### **Create a Product**
- **Method**: `POST`
- **URL**: `/api/products`
- **Request Body**:
  ```json
  {
    "name": "Laptop",
    "price": 1200,
    "image": "https://example.com/laptop.jpg"
  }
  ```

### **Get All Products**
- **Method**: `GET`
- **URL**: `/api/products`

### **Get a Product by ID**
- **Method**: `GET`
- **URL**: `/api/products/:id`

### **Update a Product**
- **Method**: `PUT`
- **URL**: `/api/products/:id`
- **Request Body**:
  ```json
  {
    "name": "Updated Laptop",
    "price": 1500,
    "image": "https://example.com/updated-laptop.jpg"
  }
  ```

### **Delete a Product**
- **Method**: `DELETE`
- **URL**: `/api/products/:id`

---

## **Project Structure**

```
product-management-api/
├── src/
│   ├── Config/          # Configuration
│   │   └── db.js
│   │   └── secrets.js
│   ├── models/          # Mongoose models
│   │   └── Product.model.js
│   ├── controllers/     # Route controllers
│   │   └── product.Controller.js
│   ├── routes/          # API routes
│   │   └── product.Routes.js
│   └── server.js        # Application entry point
├── .env                 # Environment variables
├── .gitignore           # Files ignored by Git
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

---

## **Available Scripts**

- **`pnpm run dev`**: Starts the development server with `nodemon`.









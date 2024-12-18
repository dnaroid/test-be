# Review Service

A simple review service API built with Express.js, TypeScript, and Prisma ORM, utilizing SQLite as a database.

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn
- SQLite

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:dnaroid/test-be.git
    cd test-be
    cp .sample-env .env
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the Prisma schema:

   Create the SQLite database and generate the Prisma client:

    ```bash
    npx prisma generate
    npx prisma migrate deploy
    ```

## Running the application

To start the development server:

   ```bash
   npm run dev
   ```

# API Endpoints

### Create a review

- POST /reviews
- Request Body: json

   ```json
   {
     "title": "Great Product",
     "content": "I loved this product, highly recommend!",
     "rating": 5,
     "author": "John Doe"
   }
   ```

### Get all reviews

- GET /reviews
- Query Parameters (optional):
    * take: Number of reviews to fetch (default: 10)
    * skip: Number of reviews to skip (default: 0)
    * author: Filter by author
    * rating: Filter by rating (1-5)

### Get a single review

- GET /reviews/:id

### Update a review

- PUT /reviews/:id
- Request Body: json

   ```json
       {
     "title": "Updated Title",
     "content": "Updated content of the review",
     "rating": 4,
     "author": "John Doe"
   }
   ```

## Delete a review

- DELETE /reviews/:id

## Testing

- To run the tests:

   ```bash
   npm run test
   ```

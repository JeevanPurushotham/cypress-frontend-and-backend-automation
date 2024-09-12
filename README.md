# E-Commerce Automation Framework

This project automates both frontend and backend processes for an e-commerce platform (Amazon.in) using Cypress for UI automation and Axios for API testing with JSONPlaceholder.

## Project Overview

The goal of this project is to automate:
1. **Frontend Automation**: Completing the purchase of a product on Amazon, from login to checkout.
2. **Backend Automation**: CRUD operations on a dummy REST API (JSONPlaceholder) to simulate e-commerce interactions.

### Frontend Automation Flow (Amazon):
- User logs in to Amazon.
- Searches for a product (e.g., "titan watch").
- Selects a product from the results.
- Proceeds to add the product to the cart.
- Completes the purchase flow by proceeding through the checkout process.

Open Cypress Test Runner:
npx cypress open
Select the amazon.cy.js test from the Cypress UI and run the tests.

Run Tests in Headless Mode: To run the tests in the terminal:
npx cypress run --spec cypress\e2e\integration\amazon\amazon.cy.js
Backend API Automation
The API tests interact with JSONPlaceholder for simulating CRUD operations on posts. To run the API tests:

Run the API Tests:
npx cypress run --spec cypress\e2e\integration\apiTesting\apiTests.cy.js

API Endpoints Used:
GET /posts - Fetch all posts
GET /posts/:id - Fetch a specific post
POST /posts - Create a new post
PUT /posts/:id - Update a post
DELETE /posts/:id - Delete a post

Technologies Used :
Cypress: For frontend automation
Axios: For API requests and backend automation
Mocha & Chai: For writing and asserting test cases
JavaScript (ES6): Programming language used

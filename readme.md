# Node.js Project

This project is a simple Node.js application that interacts with MongoDB Atlas. It includes three APIs: one for saving customer data with rate limiting, another for time-based data saving, and a search API to find customers within a specific age range.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB Atlas account

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/adityajangir/Nodejs-basics.git
cd Nodejs-basics
```

### Install all dependencies 
```bash
npm install
```

### Setup env variables
```bash
DATABASE_URL=<your-mongodb-atlas-uri>
PORT=3000
```

### Run the application
```bash
node app.js
```


### Use postman and test 3 apis ( Post: /db-save, Post: /time-based-api, Get: /db-search)
# Sort API Challenge

This project is a simple Node.js API that sorts arrays of numbers.

## Features

- Accepts arrays via HTTP requests
- Returns sorted arrays (ascending/descending)
- Input validation

## Tech Stack

- Node.js
- Express.js

## Getting Started

### Clone the repo

```bash
git clone https://github.com/yapisango/sort-api-challenge.git
cd sort-api-challenge

### Install Dependencies

npm install

node index.js

API runs on: http://localhost:8000

curl -X POST http://localhost:8000/sort \
  -H "Content-Type: application/json" \
  -d '{"numbers": [9, 2, 5], "order": "asc"}'

  {
  "sorted": [2, 5, 9]
}


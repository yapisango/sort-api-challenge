# Fullstack Sort API

A full-stack JavaScript application that provides two main features:
1. An API that accepts a string and returns its characters sorted alphabetically.
2. A bonus validation tool that checks for valid email and URL input.

Built using **Node.js (Express)** for the backend and **HTML/CSS/JavaScript** for the frontend. Fully deployed and publicly accessible.

---

## 1. Character Sorting API

- `POST /`  
  Accepts: `{ data: "example" }`  
  Returns: `{ word: "aeelmpx" }`  
- Accessible via the frontend interface (index.html)

---

## 2. Bonus Task: Email & URL Validator

- `POST /api/validate`  
  Accepts: `{ email: "user@example.com", url: "https://example.com" }`  
  Returns: Success or error with validation details

The form on the frontend sends a POST request and displays clear results using ✅ or ❌ indicators.

---

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Vercel (or Render for backend)
- **CORS:** Enabled to allow frontend-backend communication

---

## Live Demo

- Frontend: [https://your-frontend-url]
- API: [https://your-backend-url/api/validate]

---

## Project Structure




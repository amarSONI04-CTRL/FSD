# User Profile Dashboard

Full-stack User Profile Dashboard (Express + MongoDB + Vanilla frontend)

## Features
- Create, Read, Update, Delete user profiles
- Passwords hashed with bcrypt
- Responsive, appealing UI (soft pastel + colorful)
- Single server serving both API and frontend for easy deployment

## Run locally

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in `backend/` with your MongoDB URI:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/user_dashboard
   PORT=5000
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open `http://localhost:5000` in your browser.

## Dev
```
npm run dev
```
(Requires nodemon)

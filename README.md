# Real-Time Voting App

A simple beginner-friendly voting app built with **Node.js, Express, and Socket.io**.  
Users can log in with a name, cast one vote, and see live results.

## Features

- Login with name (no password)
- Cast one vote per user
- Real-time updates with Socket.io
- Results displayed as a bar chart (Chart.js)
- Auto-refresh fallback every 5 seconds

## Project Structure

voting-app/
│── server.js # Backend (Express + Socket.io)
│── public/
│ ├── index.html # Login Page
│ ├── vote.html # Voting Page
│ ├── results.html # Results Page
│ ├── style.css # Styling
│ └── script.js # Frontend JS

## Run Locally

## Run Locally

```bash
npm install
node server.js

Then open http://localhost:3000/ in your browser.


```

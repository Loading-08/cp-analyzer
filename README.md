# CP Analyzer 🏆

> Full-stack Competitive Programming analytics dashboard — track your Codeforces performance, detect weaknesses, and improve faster.

![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Vercel-black) ![Stack](https://img.shields.io/badge/Stack-React_|_FastAPI_|_Sklearn-blue)

🔗 **Live Demo:** [cp-analyzer-eight.vercel.app](https://cp-analyzer-eight.vercel.app)

---

## 📸 Screenshot

![Dashboard](Screenshot%202026-06-01%20213829.png)

---

## 📌 Features

- 🔍 **Codeforces Profile Lookup** — Enter any handle and fetch real-time stats
- 📊 **Performance Dashboard** — Visual breakdown of rating, solved problems, submission history
- 🧠 **Weakness Detection** — ML model (Sklearn) identifies problem tags where you underperform
- 📈 **Progress Tracking** — Rating history and contest performance charts
- ⚡ **FastAPI Backend** — REST API deployed on Render

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| Backend | FastAPI (Python) |
| ML | Scikit-learn |
| Deployment | Vercel + Render |

---

## 🚀 Run Locally

```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

---

## 👩‍💻 Author
Binary Mind — [GitHub](https://github.com/binarymind-dev)

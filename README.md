# Thinkboard

Thinkboard is a **web-based note-taking and management application** that helps users organize, track, and manage their notes efficiently. It features real-time updates, rate-limiting management, and an intuitive interface for seamless user experience.<br/>
Demo(Live on Production): https://thinkboard-5vxt.onrender.com/
---

## 🚀 Features

- **CRUD Notes**: Create, read, update, and delete notes.  
- **Rate-Limiting UI**: Prevents overuse and informs users when too many requests are made.  
- **Responsive Design**: Works smoothly on desktop, tablet, and mobile devices.  
- **Search & Filtering** *(if applicable)*: Quickly find notes.  
- **Backend API Integration**: Fully functional backend using Node.js, Express, and MongoDB Atlas.  
- **Frontend**: Built with React and Tailwind CSS for modern UI/UX.  
- **Notifications**: Uses `react-hot-toast` for interactive feedback.

---

## 📂 Project Structure

Back-end/<br/>
├─ routes/ # Express routes for Notes<br/>
├─ models/ # MongoDB models<br/>
├─ controllers/ # Logic for handling API requests<br/>
└─ server.js # Entry point of backend<br/>
<br/>
Front-end/<br/>
├─ components/ # React components (Navbar, NoteCard, etc.)<br/>
├─ pages/ # HomePage, NoteDetailPage<br/>
├─ lib/ # Axios instance for API calls<br/>
└─ App.js # Main React app entry<br/>
<br/>


---

## ⚙️ Technologies Used

- **Frontend:** React, Tailwind CSS, GSAP (for animations)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **HTTP Requests:** Axios  
- **Notifications:** react-hot-toast  
- **Icons:** lucide-react  
- **Version Control:** Git & GitHub  

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd thinkboard
```
### 2. Backend Setup
```bash
cd Back-end
npm install
```

Create a .env file with your MongoDB URI and other secrets.
Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd Front-end
npm install
npm start
```
The frontend runs on http://localhost:5173 by default.
Ensure backend API is running (http://localhost:5001 or your configured port).

Deployment

Production Backend: http://<your-domain>:5001

Production Frontend: http://<your-domain>:5001

Local Frontend (Dev Mode): http://localhost:5173

🛠 Usage

Open the application in your browser.

View all notes on the homepage.

Click a note to see details or delete it.

Create a new note using the “Add Note” feature.

If rate-limited, the UI will notify you.

📈 Future Enhancements

User authentication & authorization.
Tagging and categorization of notes.
Full-text search for notes.
Offline support and local storage sync.
Real-time collaboration with WebSockets.

📌 Author
Kritika Arora
GitHub: https://github.com/KritikaArora25
LinkedIn: https://www.linkedin.com/in/kritika-arora-28bb96292/
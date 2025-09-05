# Thinkboard

Thinkboard is a **web-based note-taking and management application** that helps users organize, track, and manage their notes efficiently. It features real-time updates, rate-limiting management, and an intuitive interface for seamless user experience.

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
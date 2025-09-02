
# 🧑‍🤝‍🧑 FindMyRoomie - Client Side

Welcome to the **FindMyRoomie** client-side project!  
This React app uses Vite, Tailwind CSS, Daisy UI, Firebase Authentication, and connects with the backend API for a seamless roommate finding experience.

---

## 🌐 Live Website

🔗 Live Site URL: [https://your-client-url.netlify.app](https://your-client-url.netlify.app)  
_(Replace with your actual deployed frontend URL)_

---

## 🚀 Technologies Used

- React (Vite)
- Tailwind CSS & Daisy UI
- Firebase Authentication (Email/Password & Google Sign-In)
- fetch (for API calls)
- React Router DOM
- React Toastify (for notifications)
- React Awesome Reveal (for animations)
- React Simple Typewriter
- React Tooltip

---

## 🛠 Features

- User Authentication with Firebase (Login, Signup, Google Login)
- Protected Routes for adding, updating, and viewing private listings
- Add, Update, Delete roommate listings with full CRUD operations
- Browse all roommate posts with pagination and search
- Like feature on roommate details (users can like multiple times but not their own post)
- Dark/Light mode toggle on the homepage
- Responsive design for mobile, tablet, and desktop
- Loading spinners and smooth animations
- Meaningful error/success messages via Toasts
- Integration with backend API hosted on Vercel

---

## 🗂 Project Structure
/src
├── components/ # Reusable UI components
├── context/ # Context API for auth and global state
│ └── AuthContext.jsx
├── firebase/ # Firebase config and provider setup
│ ├── AuthProvider.jsx
│ └── firebase.config.js
├── layouts/
│ └── MainLayout.jsx
├── pages/
│ ├── Auth/
│ │ ├── Login.jsx
│ │ └── Signup.jsx
│ ├── Home/
│ │ └── Home.jsx
│ ├── Listings/
│ │ ├── AddListing.jsx
│ │ ├── BrowseListing.jsx
│ │ ├── ListingDetails.jsx
│ │ ├── MyListing.jsx
│ │ ├── UpdateMyListing.jsx
│ │ ├── ErrorPage.jsx
│ │ └── NotFound.jsx
├── routes/
│ ├── PrivateRoute.jsx
│ └── Router.jsx
├── App.jsx
├── main.jsx
├── index.css
└── App.css


---

## 🔗 Related Links

- 🖥️ Server Repository: [https://github.com/your-username/findmyroomie-server](https://github.com/your-username/findmyroomie-server)  
- ⚙️ Server Live URL: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## 📌 Notes

- Replace all placeholder URLs and usernames with your actual deployed URLs and GitHub usernames.
- Ensure your `.env` file stores all Firebase config keys securely and is not committed.
- Make sure all API calls point to your live backend URL.

---


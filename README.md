# Future Manga 📚

A website for reading manga comics online with user authentication, 
a manga catalog, favorites list, and an admin panel for content management.

## 🔗 Links
- [Live Demo](https://onke-dev.github.io/Future-manga/)
- [GitHub](https://github.com/Onke-dev/Future-manga)

## 🛠️ Technologies
- HTML5/CSS3
- Vanilla JavaScript
- Vite
- Axios
- Firebase Authentication
- Firebase Storage
- ImgBB
- JSON-server (REST API)

## ✨ Features
- User registration and login via Firebase Authentication (JWT + password hashing)
- Manga catalog with search functionality
- Reading manga chapters with adaptive image rendering
- Add titles to favorites
- Update user profile data
- Delete account
- Admin panel for content management
- Responsive and adaptive design

## 🚀 Getting Started

1. Clone the repository:
git clone https://github.com/Onke-dev/Future-manga.git

2. Install dependencies:
npm install

3. Create a `db.json` file in the root with routes: `users`, `mangas`, `likes`, `chapters`

4. Start JSON-server:
npx json-server --watch db.json

5. Start the project:
npm run dev


💼 My Portfolio Website

A full-stack personal portfolio website built with Next.js, TypeScript, Express.js, and Prisma, featuring dynamic content management, secure authentication, and a polished user experience.

Table of Contents

📖 Overview

🚀 Features

🛠️ Tech Stack

📄 Public Pages

🔐 Private Pages

🎯 Project Setup

⚠️ Error Handling & Validation

📬 Contact

📖 Overview

This portfolio website is designed to showcase a developer's personal information, projects, and blog posts. It also features a secure, private dashboard for managing dynamic content like blogs and projects.

🚀 Features
✅ Public (No Login Required)

View blogs, projects, and about me section.

Responsive layout and polished UX.

Uses ISR (Incremental Static Regeneration) for optimal performance.

🔐 Private (Admin Only)

JWT-based authentication for secure login.

Private dashboard to manage blog posts and project entries.

CRUD operations for blog content.

Project data management (if implemented).

🛠️ Tech Stack
Area	Technology
Frontend	Next.js, TypeScript
Styling	Tailwind CSS
State/UX	react-hot-toast for feedback
Backend	Express.js, Node.js
Database	PostgreSQL + Prisma ORM (or MongoDB + Mongoose as alternative)
Auth	JWT + bcrypt (secure password hashing)
Rich Text	Optional: React Quill for blog editor
📄 Public Pages
📰 All Blogs Page

Shows all blogs.

Built using ISR for live content updates without full rebuild.

Fast load via getStaticProps.

📝 Blog Detail Page

Individual blog post rendered using:

getStaticPaths + getStaticProps

revalidate for incremental updates.

👤 About Me

Static section with:

Name, contact, bio, experience, skills.

Fetched using SSG for fast performance.

💻 Project Showcase

Grid/list view of personal projects.

Each includes:

Title, thumbnail, description, features, and live link.

Built using ISR.

🔐 Private Pages
🔑 Authentication

JWT-based login for admin (owner only).

Passwords hashed with bcrypt.

Admin user seeded during backend setup.

🧑‍💻 Dashboard

Owner-only page to:

Create / Read / Update / Delete blogs.

Manage project entries (if implemented).

Protected by route guards and token validation.

✨ Bonus Features (Optional but Recommended)
🖋️ Rich Text Editor

Blog content editor with formatting (bold, italic, links, images).

Suggested: React Quill.

🌐 General UI/UX Enhancements

Smooth transitions, skeleton loaders, carousels.

Lazy loading images and assets.

Semantic HTML & accessibility best practices.

🎯 Project Setup
1. Clone the repository
git clone https://github.com/ahsanuilkrem/portfolio-Client.git
cd portfolio-site

2. Install dependencies
# For frontend
cd client
npm install

# For backend
cd ../server
npm install

⚠️ Error Handling & Validation

This project follows strict error handling guidelines to ensure reliability and a polished experience:

✅ Form Validation

Required fields

Email format checks

Password match checks

✅ API Error Handling

Try-catch on all async handlers

Descriptive error responses

✅ Toast Notifications

Uses react-hot-toast for:

Success messages (e.g., "Blog Created ✅")

Error alerts (e.g., "Unauthorized ❌")

⚠️ Missing validation or broken error handling will result in a major penalty if this is being submitted as an assignment.

📸 Screenshots (optional)

Include UI screenshots or GIFs here if needed.

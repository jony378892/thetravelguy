## Personal Travel Blog

A full-stack web application for documenting and sharing personal travel experiences. Built with modern technologies to provide a seamless blogging experience with rich media support and responsive design.

## Live Demo

Check out the live version of the project [here](https://thetravelguy.vercel.app/).

## 🌟 Features

- **Destination Tracking**: Organize posts by locations and destinations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search & Filter**: Find posts by destination, date, or keywords
- **Admin Dashboard**: Manage all posts and content from a centralized interface
- **SEO Friendly**: Optimized for search engines with proper meta tags

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Typescript** - Type Safety
- **Tailwind CSS** - Styling and responsive design

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** or **bun**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/thetravelguy.git
cd thetravelguy
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm or bun install

# Create environment variables file
cp .env.example .env

# Edit .env file with your configuration
# MONGODB_URI=mongodb://localhost:27017/travel-blog
# PORT=3000
# NODE_ENV=development
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm or bun install

# Create environment variables file
cp .env.example .env

# Edit .env file with your configuration
# VITE_API_URL=http://localhost:5000/api
```

### 4. Database Setup

Make sure MongoDB is running on your system or configure MongoDB Atlas connection in your backend `.env` file.

## 🏃‍♂️ Running the Application

### Development Mode

**Terminal 1 - Backend:**

```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd client
npm run dev
```

The application will be available at:

- client: `http://localhost:5173`
- server: `http://localhost:3000`

### Production Build

**Build Frontend:**

```bash
cd client
npm run build
```

**Start Production Server:**

```bash
cd server
npm start
```

## 📁 Project Structure

```
personal-travel-blog/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── interfaces/
│   │   ├── lib/
│   │   ├── pages/
│   |   |── App.jsx
│   │   |── index.css
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/
│   ├── middleware/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── package.json
├── README.md
└── .gitignore
```

## 🔌 API Endpoints

### Posts

- `GET /api/blogs` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post
  <!-- - `POST /api/posts` - Create new post -->
  <!-- - `PUT /api/posts/:id` - Update post -->
  <!-- - `DELETE /api/posts/:id` - Delete post -->

### Destinations

- `GET /api/travels` - Get all travel posts
- `GET /api/travel/:id` - Get single travel posts
<!-- - `POST /api/destinations` - Create new destination -->

### Upload

- `POST /api/upload` - Upload images

## 🧪 Testing

## 📱 Environment Variables

### Backend (.env)

```env
MONGODB_URI=mongodb://localhost:27017/Travelblog
<!-- JWT_SECRET=your-jwt-secret-key
PORT=5000
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-key
CLOUDINARY_API_SECRET=your-cloudinary-secret -->
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Personal Travel Blog
```

## 🚢 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure environment variables on the platform

### Backend (Heroku/Railway)

1. Set up environment variables on the platform
2. Configure MongoDB Atlas connection
3. Deploy using platform-specific instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 👨‍💻 Author

**Jony Kanti Das**

- GitHub: [@jony378892](https://github.com/jony378892)
- Email: jony378892@gmail.com

## 🙏 Acknowledgments

- Thanks to all the open-source libraries and tools used in this project
- Special thanks to the travel blogging community for inspiration

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub or contact me directly.

---

**Happy Traveling and Blogging! ✈️📝**

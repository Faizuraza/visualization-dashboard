# Visualization Dashboard

A professional data visualization dashboard built with React, Node.js, Express, and MongoDB.

## 🌐 Live Demo

- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)
- **Backend API**: [https://your-api.onrender.com](https://your-api.onrender.com)

## ✨ Features

- 📊 Interactive data visualizations with ECharts
- 🎨 Modern, responsive design with Tailwind CSS
- 🔍 Advanced filtering system
- 📱 Mobile-friendly interface
- ⚡ Fast performance with optimized loading states
- 🎭 Professional UI with glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS v4
- ECharts
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB (local or Atlas)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/visualization-dashboard.git
   cd visualization-dashboard
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env if needed (defaults to localhost:5000)
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5174
   - Backend API: http://localhost:5000

## 📦 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions on deploying to:
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📁 Project Structure

```
visualization-dashboard/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── api/           # API calls
│   │   ├── components/    # React components
│   │   ├── context/       # Context providers
│   │   ├── layout/        # Layout components
│   │   └── pages/         # Page components
│   ├── public/
│   └── package.json
│
├── backend/               # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── scripts/         # Utility scripts
│   └── package.json
│
└── README.md
```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/insights/intensity/year` | GET | Intensity data by year |
| `/api/insights/likelihood/country` | GET | Likelihood by country |
| `/api/insights/topics/distribution` | GET | Topic distribution |
| `/api/insights/filters` | GET | Available filter options |

All endpoints support query parameters for filtering.

## 🎨 Key Features

### Professional Design
- Custom color palette with gradients
- Google Fonts (Poppins + Inter)
- Glassmorphism effects
- Smooth animations

### Responsive Layout
- Mobile: Slide-out filter drawer
- Tablet: 2-column grid
- Desktop: Full sidebar layout

### User Experience
- Loading skeletons for all charts
- Animated KPI counters
- Filter badge counters
- Smooth transitions
- Error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- Data visualization powered by [Apache ECharts](https://echarts.apache.org/)
- UI framework: [Tailwind CSS](https://tailwindcss.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ using React and Node.js

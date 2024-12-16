import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import blogRoutes from './src/routes/index.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/blogs', blogRoutes);

// Database connection
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

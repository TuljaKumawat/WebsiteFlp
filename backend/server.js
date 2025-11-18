const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');

// DB connection
require('./dbconfiguration/dbconfiguration');

// Routers
const adminRouter = require('./routers/adminrouter');
const homeRouter = require('./routers/homerouter');
const userRouter = require('./routers/userrouter');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors({
  origin: ['https://websiteflp-1.onrender.com'], // React frontend URL
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use('/download', express.static(path.join(__dirname, 'public/download')));

// Serve uploaded images
app.use('/download', express.static(path.join(__dirname, 'public/download')));

// Routes
app.use('/ad', adminRouter);
app.use('/', homeRouter);
app.use('/user', userRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

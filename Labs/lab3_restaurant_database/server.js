require('./config'); // Connect to MongoDB
const express = require('express');
const cors = require('cors');
const app = express();
const restaurantRoutes = require('./routes/restaurants');

app.use(express.json());
app.use(cors());
app.use('/', restaurantRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

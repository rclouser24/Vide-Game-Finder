require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

// Import Routes
const gameRoutes = require('./routes/games-routes');

// Use Routes
app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
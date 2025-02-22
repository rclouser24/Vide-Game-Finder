const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // Allow frontend origin
  credentials: true, // Allow cookies & auth headers
  optionsSuccessStatus: 200,
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const logger = require('./helpers/logger');
const v1CalcRouter = require('./v1/routes/calcRoutes');

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/calculator', v1CalcRouter);

const server = app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`);
  logger.info(`Click Ctrl+C to stop the server`);
});

process.on('SIGINT', () => {
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});
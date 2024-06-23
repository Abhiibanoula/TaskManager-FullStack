import express from 'express';
import morgan from 'morgan';
import httpStatus from 'http-status';
import cors from 'cors';
import Routes from './routes/index.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', Routes);

// 404 route
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).send({
    msg: 'Page not found',
  });
});

export default app;

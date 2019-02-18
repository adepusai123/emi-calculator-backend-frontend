import express from 'express';
import BodyParser from 'body-parser';
import logger from 'morgan';
import routes from './app/routes';
import cors from 'cors';
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(BodyParser.json());
app.use('/',routes);

export default app;
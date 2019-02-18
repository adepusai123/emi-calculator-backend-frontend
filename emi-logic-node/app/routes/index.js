import express from 'express'
import greeting from './greeting_routes';
const Router = express.Router();

Router.use('/',greeting);
export default Router;
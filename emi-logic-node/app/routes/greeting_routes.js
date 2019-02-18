import express from 'express'
import { GreetingController } from '../controllers/v1';
const Router = express.Router();

Router.get('/', GreetingController.welcome);
Router.route('/emi').post(GreetingController.prototype.getEMI).get(GreetingController.prototype.getEmiTable);

export default Router;
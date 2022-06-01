import { Router } from 'express';
import customerRouter from './customer.routes';

const routes = Router();
routes.use('/customers', customerRouter);

export default routes;

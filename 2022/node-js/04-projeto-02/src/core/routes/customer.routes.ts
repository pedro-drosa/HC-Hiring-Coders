import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const customerRouter = Router();

customerRouter.get('/', CustomerController.index);
customerRouter.post('/', CustomerController.store);
customerRouter.put('/:id', CustomerController.update);
customerRouter.delete('/:id', CustomerController.delete);

export default customerRouter;

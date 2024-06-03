import express from 'express';
import { orderControllers } from './order.controller';
import validateRequst from '../../utils/validRequstZod';
import { orderValid } from './order.validation';

const router = express.Router();

router.post('/',validateRequst(orderValid.OrderSchema),orderControllers.createOrders);
router.get('/', orderControllers.getOrder);

export const orderRouter = router


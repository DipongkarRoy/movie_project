import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/create-order', orderControllers.createOrders);
router.get('/', orderControllers.getOrder);

export const orderRouter = router


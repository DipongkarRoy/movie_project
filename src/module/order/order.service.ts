
import Order from './order.interface';
import { OrderModel } from './order.model';


const createOrder = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
//@ts-ignore
const getOder = async (email) => {
  const result = await OrderModel.find(email);
  return result;
};

export const allOrder = {
  createOrder,
  getOder,
};

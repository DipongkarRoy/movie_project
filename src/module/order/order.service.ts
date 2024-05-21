import Order from './order.interface';
import orderModel from './order.schema';

const createOrder = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};

const getOder = async () => {
  const result = await orderModel.find();
  return result;
};
const emailQuery = async () => {
  const result = await orderModel.find();
  return result;
};

export const allOrder = {
  createOrder,
  getOder,
  emailQuery,
};


import Order from './order.interface';
import orderModel from './order.schema';

const createOrder = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};
//@ts-ignore
const getOder = async (email) => {

  const result = await orderModel.find(email);
  return result;
};

export const allOrder = {
  createOrder,
  getOder,
};

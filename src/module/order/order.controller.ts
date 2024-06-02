
import { allOrder } from './order.service';
import catchAsync from '../../utils/CatchAsyne';

const createOrders = catchAsync(async (req , res) => {
  const result = await allOrder.createOrder(req.body);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
});

const getOrder = catchAsync( async (req ,res) => {
  const { email } = req.query;

    if (email) {
      const result = await allOrder.getOder({ email });
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
    const result = await allOrder.getOder({ });
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
});

export const orderControllers = {
  createOrders,
  getOrder,
};

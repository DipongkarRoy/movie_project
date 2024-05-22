import { Request, Response } from 'express';
import { allOrder } from './order.service';

const createOrders = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const result = await allOrder.createOrder(data);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (email) {
      const result = await allOrder.getOder({ email });
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
    else{
      const result = await allOrder.getOder({ });
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const orderControllers = {
  createOrders,
  getOrder,
};

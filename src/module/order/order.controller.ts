import { Request, Response } from 'express';
import { allOrder } from './order.service';

const createOrders = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const result = await allOrder.createOrder(data);
    res.status(200).json({
      success: true,
      massage: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await allOrder.getOder();
    res.status(200).json({
      success: true,
      massage: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const emailQuerys = async (req: Request, res: Response) => {
  try {
    // let query = {};
    // if (req.query?.email) {
    //   query = { email: req.query.email };
    //   console.log(query);

    const result = await allOrder.emailQuery();
    res.status(200).json({
      success: true,
      massage: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderControllers = {
  createOrders,
  getOrder,
  emailQuerys,
};

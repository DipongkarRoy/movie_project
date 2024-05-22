import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { ProductRouters } from './module/products/product.routes';
import { orderRouter } from './module/order/order.route';

app.use(cors());
app.use(express.json());

app.use('/api/products', ProductRouters);
app.use('/api/orders', orderRouter);

app.get('/', (req: Request, res: Response) => {
  const ph = 'level-2 programing hero team';
  res.send(ph);
});

export default app;

import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { ProductRouters } from './module/movie/product.routes';

app.use(cors());
app.use(express.json());

app.use('/api/products', ProductRouters);

app.get('/', (req: Request, res: Response) => {
  const a = 'amr band';
  res.send(a);
});

export default app;

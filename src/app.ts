import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import router from './router/routes';
import globalError from './utils/globalError';

app.use(cors());
app.use(express.json());

app.use('/api',router);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status:true,massage:'level-2 programing hero team'})
});

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    massage: 'Router not found data',
  });
});

app.use(globalError);


export default app;

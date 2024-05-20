import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors'
import { movieRouters } from './module/movie/movie.routes';




app.use(cors())
app.use(express.json())

app.use('/api/v1/movies' , movieRouters)
app.use('/api/v1/movies' , movieRouters)


app.get('/', (req: Request, res: Response) => {
  const a = 'amr band';
  res.send(a);
});

export default app;

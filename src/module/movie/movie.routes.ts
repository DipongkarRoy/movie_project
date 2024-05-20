import express from 'express';
import { movieController } from './movie.controller';
const router = express.Router()


router.post('/create-movie' ,movieController.createMovie)
router.get('/' ,movieController.getMovie)


export const movieRouters = router 
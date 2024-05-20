import Movie from "./movie.interface";
import { MovieModel } from "./movie.schema";

const createMovieDb = async(movie :Movie)=>{
   const result = await MovieModel.create(movie);
   return result
}
const getMovieDb = async()=>{
    const result = await MovieModel.find()
    return result
}

export const allMovieServices ={
    createMovieDb ,
    getMovieDb
}
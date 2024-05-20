import { Schema, model } from 'mongoose';
import Movie, { CastMember, Review } from './movie.interface';

const CastSchema = new Schema<CastMember>({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const ReviewSchema = new Schema<Review>({
  reviewer: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const MovieSchema = new Schema<Movie>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  duration: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  cast: {
    type: [CastSchema],
    required: true,
  },
  reviews: {
    type: [ReviewSchema],
    required: true,
  },
});

export const MovieModel = model<Movie>('MovieModel', MovieSchema);

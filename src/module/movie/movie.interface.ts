export type CastMember = {
  name: string;
  role: string;
};

export type Review = {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
};

export type Movie = {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genres: string[];
  rating: number;
  duration: number;
  summary: string;
  cast: CastMember[];
  reviews: Review[];
};

export default Movie;

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  plot: { type: String, required: true },
  genres: [{ type: String }],
  runtime: { type: Number },
  cast: [{ type: String }],
  poster: { type: String },
  title: { type: String, required: true },
  fullplot: { type: String },
  languages: [{ type: String }],
  released: { type: Date },
  directors: [{ type: String }],
  rated: { type: String },
  awards: {
    wins: { type: Number, default: 0 },
    nominations: { type: Number, default: 0 },
    text: { type: String }
  },
  lastupdated: { type: String }, // Can be changed to Date if format is standardized
  year: { type: Number, required: true },
  imdb: {
    rating: { type: Number },
    votes: { type: Number },
    id: { type: Number }
  },
  countries: [{ type: String }],
  type: { type: String, enum: ['movie', 'series'], default: 'movie' },
  tomatoes: {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number }
    },
    fresh: { type: Number },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number }
    },
    rotten: { type: Number },
    lastUpdated: { type: Date }
  },
  num_mflix_comments: { type: Number, default: 0 }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
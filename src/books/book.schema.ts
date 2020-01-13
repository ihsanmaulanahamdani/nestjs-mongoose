import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  author: String,
  title: String,
});

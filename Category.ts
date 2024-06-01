import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
});

const Category = model('Category', categorySchema);

export default Category;

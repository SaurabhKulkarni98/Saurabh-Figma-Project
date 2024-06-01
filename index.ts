import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user';
import categoryRoutes from './routes/category';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);

const dbUri = "mongodb+srv://saurabhuser:saurabhuser@cluster0.kbgm9on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

import express, { Request, Response, Router } from 'express';
import Category from '../models/Category';

const categoryRouter: Router = express.Router();

// Create Category
categoryRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { name, image, status } = req.body;
    const category = new Category({ name, image, status });
    await category.save();
    res.status(201).json(category);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

// Get All Categories
categoryRouter.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
});

export default categoryRouter;

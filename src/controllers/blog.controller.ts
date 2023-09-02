import { Request, Response } from 'express';
import BlogService from '../services/blog.service';

class BlogController {
  private blogService = new BlogService();

  async create(req: Request, res: Response): Promise<void> {
    try {
      const newBlog = await this.blogService.create(req.body);
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog post' });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    console.log(req)
    const blogs = await this.blogService.getAll();
    res.json(blogs);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const blog = await this.blogService.getById(id);

    if (!blog) {
      res.status(404).json({ error: 'Blog not found' });
    } else {
      res.json(blog);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedBlog = await this.blogService.update(id, updatedData);
    if (!updatedBlog) {
      res.status(404).json({ error: 'Blog not found' });
    } else {
      res.json(updatedBlog);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.blogService.delete(id);
    res.status(204).send();
  }
}

export default BlogController;

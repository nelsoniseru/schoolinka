import Blog, { Blog as BlogModel } from '../models/blog.model';

class BlogService {
  async create(blogData: BlogModel): Promise<BlogModel> {
    const blog = new Blog(blogData);
    return await blog.save();
  }

  async getAll(): Promise<BlogModel[]> {
    return await Blog.find();
  }

  async getById(id: string): Promise<BlogModel | null> {
    return await Blog.findOne({id:id});
  }

  async update(id: string, updatedData: BlogModel): Promise<BlogModel | null> {
    return await Blog.findOneAndUpdate({id:id},{$set:updatedData});
  }

  async delete(id: string): Promise<void> {
    await Blog.deleteOne({id:id});
  }
}

export default BlogService;

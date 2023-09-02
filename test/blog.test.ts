import request from 'supertest';
import app from '../src/app';
let createdBlogId = '';

describe('Blog API', () => {

  it('should create a new blog post', async () => {
    const newBlog = {
      title: 'Test',
      content: 'the boy is here',
      author: 'nelson',
    };

    const response = await request(app)
      .post('/blogs')
      .send(newBlog)
      .expect(201);

    expect(response.body.title).toBe(newBlog.title);
    expect(response.body.content).toBe(newBlog.content);
    expect(response.body.author).toBe(newBlog.author);

    createdBlogId = response.body.id;
  });

  it('should get all blog posts', async () => {
    const response = await request(app)
      .get('/blogs')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a specific blog post by ID', async () => {
    const response = await request(app)
      .get(`/blogs/${createdBlogId}`)
      .expect(200);

    expect(response.body.id).toBe(createdBlogId);
  });

  it('should update a specific blog post by ID', async () => {
    const updatedBlog = {
      title: 'hello',
      content: 'my updated title',
      author: 'nelson',
    };
    const response = await request(app)

      .post(`/blogs/update/${createdBlogId}`)
      .send(updatedBlog)
      .expect(200);

    expect(response.body.title).toBe(updatedBlog.title);
    expect(response.body.content).toBe(updatedBlog.content);
    expect(response.body.author).toBe(updatedBlog.author);
  });

  it('should delete a specific blog post by ID', async () => {
    await request(app)
      .delete(`/blogs/${createdBlogId}`)
      .expect(204);

    const response = await request(app)
      .get(`/blogs/${createdBlogId}`)
      .expect(404);

    expect(response.body.error).toBe('Blog not found');
  });
});

import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.json(blogs);
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

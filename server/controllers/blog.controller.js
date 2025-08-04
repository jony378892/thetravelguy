import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    if (!blogs) {
      res.json({ success: false, message: "No blogs data found" });
    }
    return res.json(blogs);
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const slug = req.params.slug;

    const blog = await Blog.findOne({ slug });

    if (blog) {
      res.json(blog);
    } else {
      res.json({ success: false, message: "No blog found" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error fetching blog" });
  }
};

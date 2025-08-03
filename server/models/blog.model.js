import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    category: String,
    subcategory: String,
    publishDate: String,
    readTime: String,
    featuredImage: String,
    excerpt: String,
    tags: [String],
    location: {
      country: String,
      city: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    content: String,
    rating: Number,
    views: Number,
    likes: Number,
    comments: Number,
    featured: Boolean,
    seoKeywords: [String],
  },
  {
    collection: "blog",
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Travel", blogSchema);

export default Blog;

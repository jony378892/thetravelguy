export interface DestinationData {
  _id: number;
  image: string;
  title: string;
  country: string;
  description: {
    safety: string;
    travel_guide: string;
    local_food: string;
    language_tip: string;
    currency_info: string;
  };
  experience: string;
}

export interface BlogData {
  _id: number;
  title: string;
  slug: string;
  category: string;
  subcategory: string;
  publishDate: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  tags: string[];
  location: {
    country: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  content: string;
  rating: number;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  seoKeywords: string[];
}

export interface InstagramImages {
  _id: string;
  image: string;
}

import { Request, Response } from "express";
import Product from "../models/product.model";
import { NOT_FOUND, BAD_REQUEST, CREATED, OK } from "../constants/http";

interface SearchParams {
  q?: string;
  minRating?: string;
  maxPrice?: string;
  inStock?: string;
  limit?: string;
  sort?: string;
}

// Translation mapping (should be moved to a separate config file if large)
const PRODUCT_NAME_MAP: Record<string, string> = {
  "productSection_01.title_01": "SONY HEADSET WH-1000XM5",
  "productSection_01.title_02": "GEFORCE RTX 3090 24GB",
  "productSection_01.title_03": "SONY PLAYSTATION 5 PRO",
  // Add all other product mappings
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(CREATED).json(product);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to create product" });
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(OK).json(products);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(NOT_FOUND).json({ error: "Product not found" });
    }
    res.status(OK).json(product);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Error retrieving product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(NOT_FOUND).json({ error: "Product not found" });
    }
    res.status(OK).json(product);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(NOT_FOUND).json({ error: "Product not found" });
    }
    res.status(OK).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to delete product" });
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const { 
      q: searchQuery, 
      minRating, 
      maxPrice, 
      inStock,
      limit = '10',
      sort = 'rating'
    } = req.query as SearchParams;

    // Validate search query
    if (!searchQuery || typeof searchQuery !== 'string') {
      return res.status(BAD_REQUEST).json({ 
        error: "Search query (q) is required and must be a string" 
      });
    }

    // 1. Find all possible translation keys that match real names
    const matchingKeys = Object.entries(PRODUCT_NAME_MAP)
      .filter(([_, realName]) => 
        realName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(([key]) => key);

    // 2. Build search conditions
    const searchConditions: any = {
      $or: [
        { title: { $in: matchingKeys } }, // Search by matched keys
        { description: { $regex: searchQuery, $options: 'i' } }, // Fallback to description
        { info: { $regex: searchQuery, $options: 'i' } } // Fallback to info
      ]
    };

    // Add numeric price filter if provided
    if (maxPrice) {
      const numericPrice = parseFloat(maxPrice);
      if (!isNaN(numericPrice)) {
        searchConditions.normalPrice = { 
          $lte: numericPrice.toString() 
        };
      }
    }

    // Add rating filter if provided
    if (minRating) {
      const rating = parseFloat(minRating);
      if (!isNaN(rating)) {
        searchConditions.rating = { $gte: rating };
      }
    }

    // Add stock availability filter
    if (inStock === 'true') {
      searchConditions.quantity = { $gt: 0 };
    }

    // Build sort object
    const sortOptions: Record<string, 1 | -1> = {};
    switch (sort) {
      case 'price':
        sortOptions.normalPrice = 1;
        break;
      case 'newest':
        sortOptions.createdAt = -1;
        break;
      case 'popular':
        sortOptions.quantitySold = -1;
        break;
      default:
        sortOptions.rating = -1;
    }

    // 3. Execute search
    const products = await Product.find(searchConditions)
      .sort(sortOptions)
      .limit(parseInt(limit, 10) || 10);

    // 4. Convert results to display real names
    const response = products.map(product => ({
      ...product.toObject(),
      title: PRODUCT_NAME_MAP[product.title] || product.title,
      // Keep original key if needed for frontend
      originalTitle: product.title
    }));

    res.status(OK).json(response);
  } catch (error) {
    console.error("Search error:", error);
    res.status(BAD_REQUEST).json({ 
      error: "Failed to perform search",
      details: error instanceof Error ? error.message : undefined
    });
  }
};
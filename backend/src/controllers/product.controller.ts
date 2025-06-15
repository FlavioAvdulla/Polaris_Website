import { Request, Response } from "express";
import Product from "../models/product.model";
import { NOT_FOUND, BAD_REQUEST, CREATED, OK } from "../constants/http";

// Updated interface for search parameters to match query string types
interface SearchParams {
  q?: string;
  minRating?: string;
  maxPrice?: string;
  inStock?: string; // Query params are always strings
  limit?: string;
  sort?: string;
}

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

    // Build the search conditions
    const searchConditions: any = {
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
        { info: { $regex: searchQuery, $options: 'i' } }
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

    // Build sort object based on sort parameter
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
      default: // 'rating' or any other value
        sortOptions.rating = -1;
    }

    // Execute search with sorting
    const products = await Product.find(searchConditions)
      .sort(sortOptions)
      .limit(parseInt(limit, 10) || 10);

    res.status(OK).json(products);
  } catch (error) {
    console.error("Search error:", error);
    res.status(BAD_REQUEST).json({ 
      error: "Failed to perform search",
      details: error instanceof Error ? error.message : undefined
    });
  }
};
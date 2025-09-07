import { Request, Response } from "express";
import Product from "../models/product.model";
import { NOT_FOUND, BAD_REQUEST, CREATED, OK } from "../constants/http";

/**
 * Interface defining the search parameters for product queries
 */
interface SearchParams {
  q?: string;          // Search query string
  minRating?: string;  // Minimum rating filter
  maxPrice?: string;   // Maximum price filter
  inStock?: string;    // Stock availability filter ('true'/'false')
  limit?: string;      // Number of results to return
  sort?: string;       // Sort criteria ('rating', 'price', 'newest', 'popular')
}

/**
 * Mapping object that translates product title keys to actual product information
 * Used for maintaining consistent product data across the application
 * This serves as a translation layer between database storage and frontend display
 */
const PRODUCT_MAP: Record<string, { 
  id: string;          // Product ID for frontend
  name: string;        // Display name
  image?: string;      // Optional image URL override
  normalPrice?: string; // Optional normal price override
  offerPrice?: string;  // Optional offer price override
}> = {
  // Id - 4
  "product_01.title": {
    id: "4",
    name: "LENOVO LEGION 5",
  },
  // Id - 48
  "product_02.title": {
    id: "48",
    name: "PS VR HEADSET",
  },
  // Id - 49
  "product_03.title": {
    id: "49",
    name: "SONY PLAYSTATION 5 PRO",
  },
  // Id - 50
  "product_04.title": {
    id: "50",
    name: "GEFORCE RTX 3090 24GB",
  },
  // Id - 51
  "product_05.title": {
    id: "51",
    name: "SONY HEADSET WH-1000XM5",
  },
  // Id - 52
  "product_06.title": {
    id: "52",
    name: "REDRAGON K535 KEYBOARD",
  }
};

/**
 * Legacy mapping for backward compatibility
 * Maintains the original name-only mapping structure
 */
const PRODUCT_NAME_MAP: Record<string, string> = Object.entries(PRODUCT_MAP).reduce(
  (acc, [key, value]) => {
    acc[key] = value.name;
    return acc;
  },
  {} as Record<string, string>
);

// Array of all mapped product IDs for quick reference
const MAPPED_PRODUCT_IDS = Object.values(PRODUCT_MAP).map(product => product.id);

/**
 * Creates a new product in the database
 * @param req - Express request object containing product data
 * @param res - Express response object
 */
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(CREATED).json(product);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to create product" });
  }
};

/**
 * Retrieves all products from the database
 * Applies product mapping to transform database titles to display names
 * @param _req - Express request object
 * @param res - Express response object
 */
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    // Transform each product using the mapping system
    const response = products.map(product => ({
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice,
      offerPrice: PRODUCT_MAP[product.title]?.offerPrice || product.offerPrice
    }));
    res.status(OK).json(response);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to fetch products" });
  }
};

/**
 * Retrieves a single product by ID
 * Applies product mapping and returns the transformed product
 * @param req - Express request object with product ID parameter
 * @param res - Express response object
 */
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(NOT_FOUND).json({ error: "Product not found" });
    }
    
    // Apply product mapping transformations
    const response = {
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice,
      offerPrice: PRODUCT_MAP[product.title]?.offerPrice || product.offerPrice
    };
    
    res.status(OK).json(response);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Error retrieving product" });
  }
};

/**
 * Updates an existing product by ID
 * Returns the updated product with mapping applied
 * @param req - Express request object with product ID and update data
 * @param res - Express response object
 */
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run model validators on update
    });
    if (!product) {
      return res.status(NOT_FOUND).json({ error: "Product not found" });
    }
    
    // Apply product mapping to the updated product
    const response = {
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice,
      offerPrice: PRODUCT_MAP[product.title]?.offerPrice || product.offerPrice
    };
    
    res.status(OK).json(response);
  } catch (error) {
    res.status(BAD_REQUEST).json({ error: "Failed to update product" });
  }
};

/**
 * Deletes a product by ID
 * @param req - Express request object with product ID parameter
 * @param res - Express response object
 */
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

/**
 * Searches products based on various criteria
 * Supports text search, price range, rating, stock availability, and sorting
 * @param req - Express request object with search query parameters
 * @param res - Express response object
 */
export const searchProducts = async (req: Request, res: Response) => {
  try {
    const { 
      q: searchQuery,     // Search query string
      minRating,          // Minimum rating filter
      maxPrice,           // Maximum price filter
      inStock,            // Stock availability filter
      limit = '10',       // Results limit (default: 10)
      sort = 'rating'     // Sort criteria (default: rating)
    } = req.query as SearchParams;

    // Validate that search query exists and is a string
    if (!searchQuery || typeof searchQuery !== 'string') {
      return res.status(BAD_REQUEST).json({ 
        error: "Search query (q) is required and must be a string" 
      });
    }

    // 1. Find all product keys that match the search query in their display names
    const matchingKeys = Object.entries(PRODUCT_MAP)
      .filter(([_, productInfo]) => 
        productInfo.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(([key]) => key);

    // Return empty array if no products match the search
    if (matchingKeys.length === 0) {
      return res.status(OK).json([]);
    }

    // 2. Build search conditions object for MongoDB query
    const searchConditions: any = {
      title: { $in: matchingKeys } // Only search for products with mapped titles
    };

    // Add maximum price filter if provided
    if (maxPrice) {
      const numericPrice = parseFloat(maxPrice);
      if (!isNaN(numericPrice)) {
        searchConditions.normalPrice = { 
          $lte: numericPrice.toString() 
        };
      }
    }

    // Add minimum rating filter if provided
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

    // 3. Build sort options based on the sort parameter
    const sortOptions: Record<string, 1 | -1> = {};
    switch (sort) {
      case 'price':
        sortOptions.normalPrice = 1; // Sort by price ascending
        break;
      case 'newest':
        sortOptions.createdAt = -1; // Sort by creation date descending
        break;
      case 'popular':
        sortOptions.quantitySold = -1; // Sort by sales quantity descending
        break;
      default:
        sortOptions.rating = -1; // Default: sort by rating descending
    }

    // 4. Execute the search query with conditions, sorting, and limit
    const products = await Product.find(searchConditions)
      .sort(sortOptions)
      .limit(parseInt(limit, 10) || 10);

    // 5. Transform the results using the product mapping
    const response = products.map(product => ({
      ...product.toObject(),
      title: PRODUCT_MAP[product.title].name, // Always use mapped display name
      id: PRODUCT_MAP[product.title].id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice,
      offerPrice: PRODUCT_MAP[product.title]?.offerPrice || product.offerPrice
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
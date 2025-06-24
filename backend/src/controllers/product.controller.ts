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

// Enhanced product mapping with IDs and additional details
const PRODUCT_MAP: Record<string, { 
  id: string;
  name: string;
  image?: string;
  normalPrice?: string;
}> = {
  "product_01.title": {
    id: "4",
    name: "LENOVO LEGION 5",
    image: "Product_01.png",
    normalPrice: "€639"
  },
  "product_02.title": {
    id: "4",
    name: "PS VR HEADSET",
    image: "Product_02.png",
    normalPrice: "€639"
  },
  "productSection_01.title_03": {
    id: "3",
    name: "SONY PLAYSTATION 5 PRO",
    image: "Product_03.png",
    normalPrice: "€639"
  },
  "productSection_01.title_02": {
    id: "2",
    name: "GEFORCE RTX 3090 24GB",
    image: "Product_04.png",
    normalPrice: "€639"
  },
  "productSection_01.title_01": {
    id: "1",
    name: "SONY HEADSET WH-1000XM5",
    image: "Product_05.png",
    normalPrice: "€639"
  },
  "product_06.title": {
    id: "4",
    name: "REDRAGON K535 KEYBOARD",
    image: "Product_06.png",
    normalPrice: "€639"
  }
};

// Maintain backward compatibility with existing name mapping
const PRODUCT_NAME_MAP: Record<string, string> = Object.entries(PRODUCT_MAP).reduce(
  (acc, [key, value]) => {
    acc[key] = value.name;
    return acc;
  },
  {} as Record<string, string>
);

// Get only the IDs from PRODUCT_MAP
const MAPPED_PRODUCT_IDS = Object.values(PRODUCT_MAP).map(product => product.id);

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
    const response = products.map(product => ({
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice
    }));
    res.status(OK).json(response);
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
    
    const response = {
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice
    };
    
    res.status(OK).json(response);
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
    
    const response = {
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice
    };
    
    res.status(OK).json(response);
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
    const matchingKeys = Object.entries(PRODUCT_MAP)
      .filter(([_, productInfo]) => 
        productInfo.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(([key]) => key);

    // 2. Build search conditions
    const searchConditions: any = {
      $or: [
        { title: { $in: matchingKeys } },
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
      .limit(100); // Get more than needed to account for deduplication

    // 4. Deduplicate products by title
    const uniqueProducts = products.reduce((acc: any[], product) => {
      const existingProduct = acc.find(p => p.title === product.title);
      if (!existingProduct) {
        acc.push(product);
      }
      return acc;
    }, []).slice(0, parseInt(limit, 10) || 10);

    // 5. Convert results to display mapped data
    const response = uniqueProducts.map(product => ({
      ...product.toObject(),
      title: PRODUCT_MAP[product.title]?.name || product.title,
      id: PRODUCT_MAP[product.title]?.id || product._id,
      image: PRODUCT_MAP[product.title]?.image || product.image,
      normalPrice: PRODUCT_MAP[product.title]?.normalPrice || product.normalPrice,
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
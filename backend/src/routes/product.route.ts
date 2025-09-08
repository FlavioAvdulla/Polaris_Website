import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts
} from "../controllers/product.controller";
import authenticate from "../middleware/authenticate";
import { authorizeRoles } from "../middleware/authorize";
import { UserRole } from "../constants/user";
import { validateRequest } from "../middleware/validateRequest";
import { searchProductSchema } from "../validations/product.validation";

/**
 * Product Routes Router
 * 
 * This router defines all the product-related endpoints for the application.
 * It handles product CRUD operations (Create, Read, Update, Delete) and search functionality.
 * Some routes are public while others require authentication and admin privileges.
 */
const router = Router();

// Public routes - accessible without authentication
router.get("/", getProducts); // Get all products (with optional query parameters for filtering/pagination)
router.get("/search", 
  validateRequest(searchProductSchema), // Validate query parameters against Joi schema
  searchProducts // Search products with various filters
);

router.get("/:id", getProductById); // Get a specific product by ID

// Admin-only routes - require authentication and admin role
// Apply authentication and authorization middleware to all following routes
router.use(
  authenticate, // Verify JWT token and attach user to request
  authorizeRoles([UserRole.ADMIN])); // Restrict access to users with ADMIN role only
  
router.post("/", createProduct); // Create a new product
router.patch("/:id", updateProduct); // Update an existing product (partial update)
router.delete("/:id", deleteProduct); // Delete a product

export default router;
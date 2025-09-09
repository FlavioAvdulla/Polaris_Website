import { z } from "zod";
import { UserRole } from "../constants/user";

// Base product schema containing common validation rules for product data
// Used as foundation for both create and update schemas
const productBaseSchema = z.object({
  image: z.string().min(1, "Image URL is required"), // Validates required image URL
  title: z.string().min(1, "Title is required").max(100), // Validates title with length constraints
  description: z.string().min(1, "Description is required").max(500), // Validates description with length constraints
  normalPrice: z.string().regex(/^\$\d+(\.\d{2})?$/, "Invalid price format"), // Validates price format (e.g., $19.99)
  offerPrice: z.string().regex(/^\$\d+(\.\d{2})?$/, "Invalid price format"), // Validates offer price format
  quantity: z.number().int().min(0, "Quantity cannot be negative"), // Validates non-negative integer quantity
  available: z.string().min(1, "Availability status is required"), // Validates availability status
  info: z.string().optional(), // Optional additional product information
  rating: z.number().min(0).max(5).default(0), // Validates rating between 0-5 with default value
  quantitySold: z.number().int().min(0).default(0), // Validates non-negative quantity sold with default
  sold: z.string().min(1, "Sold status is required"), // Validates sold status indicator
});

// Schema for creating a new product
// Extends the base schema and adds createdBy field (typically set in middleware)
export const createProductSchema = z.object({
  body: productBaseSchema.extend({
    createdBy: z.string().optional(), // Will be set in middleware based on authenticated user
  }),
});

// Schema for updating an existing product
// Requires product ID in params and allows partial updates to product fields
export const updateProductSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Product ID is required"), // Validates required product ID in URL params
  }),
  body: productBaseSchema.partial(), // Allows partial updates to any product field
});

// Product ID schema
export const productIdSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Product ID is required"),
  }),
});

// Schema for product search functionality
// Validates query parameters for searching and filtering products
export const searchProductSchema = z.object({
  query: z.object({
    q: z.string().min(1, "Search query is required").max(100), // Validates search query string
    minRating: z.coerce.number().min(0).max(5).optional(), // Validates optional minimum rating filter
    maxPrice: z.coerce.number().min(0).optional(), // Validates optional maximum price filter
    inStock: z.enum(["true", "false"]).optional(), // Validates optional in-stock filter
    limit: z.coerce.number().min(1).max(100).default(10), // Validates results limit with default
    sort: z.enum(["price", "rating", "newest", "popular"]).default("rating"), // Validates sort option with default
  }),
});

// Schema for admin-only actions
// Validates authorization header to ensure user has admin privileges
export const adminActionSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1, "Authorization header is required"), // Validates presence of auth header
  }),
});

// Type exports inferred from Zod schemas for TypeScript type safety
// These types can be used throughout the application for type checking
export type CreateProductInput = z.infer<typeof createProductSchema>; // Type for product creation data
export type UpdateProductInput = z.infer<typeof updateProductSchema>; // Type for product update data
export type ProductIdInput = z.infer<typeof productIdSchema>; // Type for product ID parameters
export type SearchProductInput = z.infer<typeof searchProductSchema>; // Type for search query parameters
export type AdminActionInput = z.infer<typeof adminActionSchema>; // Type for admin action requests
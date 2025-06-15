import { z } from "zod";
import { UserRole } from "../constants/user";

// Base product schema
const productBaseSchema = z.object({
  image: z.string().min(1, "Image URL is required"),
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1, "Description is required").max(500),
  normalPrice: z.string().regex(/^\$\d+(\.\d{2})?$/, "Invalid price format"),
  quantity: z.number().int().min(0, "Quantity cannot be negative"),
  available: z.string().min(1, "Availability status is required"),
  info: z.string().optional(),
  rating: z.number().min(0).max(5).default(0),
  quantitySold: z.number().int().min(0).default(0),
  sold: z.string().min(1, "Sold status is required"),
});

// Create product schema
export const createProductSchema = z.object({
  body: productBaseSchema.extend({
    createdBy: z.string().optional(), // Will be set in middleware
  }),
});

// Update product schema
export const updateProductSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Product ID is required"),
  }),
  body: productBaseSchema.partial(),
});

// Product ID schema
export const productIdSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Product ID is required"),
  }),
});

// Search products schema
export const searchProductSchema = z.object({
  query: z.object({
    q: z.string().min(1, "Search query is required").max(100),
    minRating: z.coerce.number().min(0).max(5).optional(),
    maxPrice: z.coerce.number().min(0).optional(),
    inStock: z.enum(["true", "false"]).optional(),
    limit: z.coerce.number().min(1).max(100).default(10),
    sort: z.enum(["price", "rating", "newest", "popular"]).default("rating"),
  }),
});

// Admin actions schema
export const adminActionSchema = z.object({
  headers: z.object({
    authorization: z.string().min(1, "Authorization header is required"),
  }),
});

// Type exports
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductIdInput = z.infer<typeof productIdSchema>;
export type SearchProductInput = z.infer<typeof searchProductSchema>;
export type AdminActionInput = z.infer<typeof adminActionSchema>;
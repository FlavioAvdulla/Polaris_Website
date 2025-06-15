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

const router = Router();

router.get("/", getProducts);
router.get("/search", 
  validateRequest(searchProductSchema), // Add validation for search parameters
  searchProducts
);

router.get("/:id", getProductById);

// Protect admin-only routes
router.use(authenticate, authorizeRoles([UserRole.ADMIN]));
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
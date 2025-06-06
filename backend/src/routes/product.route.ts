import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";
import authenticate from "../middleware/authenticate";
import { authorizeRoles } from "../middleware/authorize";
import { UserRole } from "../constants/user";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

// Protect admin-only routes
router.use(authenticate, authorizeRoles([UserRole.ADMIN]));
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
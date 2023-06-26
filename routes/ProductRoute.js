import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

// READ - GET
router.get('/products', getProducts);

// READ - GET by ID
router.get('/products/:id', getProductById);

// CREATE - POST
router.post('/products', saveProduct);

// UPDATE - PATCH
router.patch('/products/:id', updateProduct);

// DELETE - DELETE
router.delete('/products/:id', deleteProduct);

export default router;
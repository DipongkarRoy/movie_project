import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/', ProductController.getProduct);
router.get('/:productId', ProductController.productId);
router.delete('/:productId', ProductController.productIdDelete);
router.put('/:productId', ProductController.updateProduct);

export const ProductRouters = router;

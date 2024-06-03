import express from 'express';
import { ProductController } from './product.controller';
import validateRequst from '../../utils/validRequstZod';
import { validation } from './product.validate';

const router = express.Router();

router.post('/', validateRequst(validation.ProductValidation) ,ProductController.createProduct);
router.get('/', ProductController.getAllProduct);
router.get('/:productId', ProductController.singleProductId);
router.delete('/:productId', ProductController.productIdDelete);
router.put('/:productId',validateRequst(validation.updateValidation)  ,ProductController.updateProduct);

export const ProductRouters = router;

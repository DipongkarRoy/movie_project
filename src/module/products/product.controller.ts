import { allProductServices } from './product.service';
import catchAsync from '../../utils/CatchAsyne';

const createProduct = catchAsync(async (req, res) => {
  const result = await allProductServices.createProductDb(req.body);

  res.status(200).json({
    success: true,
    massage: 'Product created successfully!',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await allProductServices.getProductDb(req.query);
  res.status(200).json({
    success: true,
    massage: 'Products fetched successfully!',
    data: result,
  });
});

const singleProductId = catchAsync(async (req, res) => {
  const { productId } = req.params;
  //@ts-ignore
  const result = await allProductServices.idProductDb(productId);
  res.status(200).json({
    success: true,
    massage: 'Product get successfully!',
    data: result,
  });
});
const productIdDelete = catchAsync(async (req, res) => {
  const { id } = req.params;
  //@ts-ignore
  const result = await allProductServices.deleteProductDb(id);
  res.status(200).json({
    success: true,
    massage: 'Product deleted successfully!!',
    data: result,
  });
});

export const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;
  const product = await allProductServices.updateProductIntoDb(
    //@ts-ignore
    productId,
    updateData,
    { new: true },
  );
  if (!product)
    return res
      .status(404)
      .json({ success: false, message: 'Product not found' });

  res.status(200).json({
    success: true,
    message: 'Product updated successfully!',
    data: product,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  singleProductId,
  productIdDelete,
  updateProduct,
};

import { Request, Response } from 'express';
import { allProductServices } from './product.service';
import { ProductModel } from './product.schema';
const createProduct = async (req: Request, res: Response) => {
  try {
    const id = req.body.products;
    const result = await allProductServices.createProductDb(id);

    res.status(200).json({
      success: true,
      massage: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await allProductServices.getProductDb();

    res.status(200).json({
      success: true,
      massage: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const productId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await allProductServices.idProductDb(productId);
    res.status(200).json({
      success: true,
      massage: 'Product get successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const productIdDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await allProductServices.deleteProductDb(id);
    res.status(200).json({
      success: true,
      massage: 'Product deleted successfully!!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  // const data = ProductModel.validate(req.body);
  // if (data) console.log(data);
  // return res
  //   .status(400)
  //   .json({ success: false, message: 'update data succesfully' });

  try {
    const {productId} = req.params;
    const updateData = req.body;
    const product = await allProductServices.updateProductIntoDb(
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
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  productId,
  productIdDelete,
  updateProduct,
};

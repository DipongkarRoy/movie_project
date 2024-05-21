import { Request, Response } from 'express';
import { allProductServices } from './product.service';
import Product from './product.interface';
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
    // let query = {}
    // if(req.query?.name ==req.query?.name){
    //     query={name: req.query.name }
    //     console.log(query);
    // }

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
const productIdUpdate = async (req: Request, res: Response) => {
  const { productId } = req.params;
  
  const updateData: Partial<Product> = req.body;
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updateData,
      { new: true, runValidators: true },
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error, message: 'product update successfully' });
  }
};
export const ProductController = {
  createProduct,
  getProduct,
  productId,
  productIdDelete,
  productIdUpdate,
};

import { Request, Response } from 'express';
import { allProductServices } from './product.service';

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
    const {searchTerm} = req.query

    if(searchTerm){
      //@ts-ignore
      const result = await allProductServices.getProductDb({searchTerm});

      res.status(200).json({
        success: true,
        massage: 'Products fetched successfully!',
        data: result,
      });
    }
    else{
      //@ts-ignore
      const result = await allProductServices.getProductDb({});

      res.status(200).json({
        success: true,
        massage: 'Products fetched successfully!',
        data: result,
      });
    }
    
  } catch (error) {
    console.log(error);
  }
};

const productId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    //@ts-ignore
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
    //@ts-ignore
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

  try {
    const productId = req.params.productId;
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

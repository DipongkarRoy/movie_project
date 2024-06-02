import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductDb = async (query: Record<string, unknown>) => {
  let searchTerm = ' ';

  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const result = await ProductModel.find({
    $or: ['name'].map((fields) => ({
      [fields]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return result;
};

const idProductDb = async (id: Product) => {
  const result = await ProductModel.findById(id);
  return result;
};
const deleteProductDb = async (id: Product) => {
  const result = await ProductModel.deleteOne(id);
  return result;
};
const updateProductIntoDb = async (
  id: Product,
  //@ts-ignore
  updateData,
  options = { new: true },
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData, options);
  return result;
};

export const allProductServices = {
  createProductDb,
  getProductDb,
  idProductDb,
  deleteProductDb,
  updateProductIntoDb,
};

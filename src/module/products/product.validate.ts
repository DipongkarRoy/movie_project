import { z } from 'zod';

const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const ProductValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantSchema),
    inventory: InventorySchema,
  }),
});
const updateValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(VariantSchema),
    inventory: InventorySchema,
  }),
});

export const validation ={
    ProductValidation,
    updateValidation
};

import { z } from 'zod';

const OrderSchema = z.object({
    body:z.object({
        email: z.string().email(),
        productId: z.string(),
        price: z.number().nonnegative(),
        quantity: z.number().int().nonnegative(),
      })
})



export const orderValid = {
  OrderSchema,
};

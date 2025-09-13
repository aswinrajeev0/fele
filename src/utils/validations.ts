import { z } from 'zod'

export const createProductSchema = z.object({
    productName: z.string().trim(),
    price: z.number(),
    productImage: z.string().trim(),
    brand: z.string().trim(),
    categoryId: z.string().trim().optional(),
    categoryName: z.string().trim().optional()
})

export type CreateProductDTO = z.infer<typeof createProductSchema>
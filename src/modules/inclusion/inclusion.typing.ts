import * as z from "zod";

export const inclusionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be 0 or more"),
  status: z.enum(["draft", "active", "inactive"]),
  type: z.enum([
    "transportation",
    "accommodation",
    "meal",
    "equipment",
    "service",
    "facility",
    "administration",
    "visa",
    "insurance",
    "addon",
    "documentation",
  ]),
  meta: z.any().optional(),
});

export const inclusionSchemaWithId = inclusionSchema.extend({
  _id: z.string().optional(),
});

export type InclusionSchema = z.infer<typeof inclusionSchema>;
export type InclusionSchemaWithId = z.infer<typeof inclusionSchemaWithId>;
export type InclusionSchemaMaybeWithId =
  | InclusionSchema
  | InclusionSchemaWithId;

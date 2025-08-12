import { z } from "zod";

export const tenantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  contact: z.object({
    phone: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
  }),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    province: z.string().optional(),
    country: z.string().optional(),
    postalCode: z.string().optional(),
    coordinates: z.object({
      lat: z.coerce.number().optional(),
      lng: z.coerce.number().optional(),
    }),
  }),
  status: z.enum(["active", "inactive"]),
});

export const tenantSchemaWithId = tenantSchema.extend({
  _id: z.string().optional(),
});

export type TenantSchema = z.infer<typeof tenantSchema>;
export type TenantSchemaWithId = z.infer<typeof tenantSchemaWithId>;
export type TenantSchemaMaybeWithId = TenantSchema | TenantSchemaWithId;

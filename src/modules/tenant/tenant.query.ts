import { apiInstance } from "@/lib/fetch";
import { TenantSchema, TenantSchemaWithId } from "./tenant.typing";

export const listTenant = async () => {
  return await apiInstance.get("/api/v1/tenant", {
    withCredentials: true,
  });
};

export const createTenant = async (data: TenantSchema) => {
  return await apiInstance.post("/api/v1/tenant", data, {
    withCredentials: true,
  });
};

export const updateTenant = async (data: TenantSchemaWithId) => {
  return await apiInstance.patch(`/api/v1/tenant/${data._id}`, data, {
    withCredentials: true,
  });
};

export const getTenantById = async (id: string) => {
  return await apiInstance.get(`/api/v1/tenant/${id}`, {
    withCredentials: true,
  });
};

export const removeTenantById = async (id: string) => {
  return await apiInstance.delete(`/api/v1/tenant/${id}`, {
    withCredentials: true,
  });
};

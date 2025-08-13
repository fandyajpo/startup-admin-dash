import { apiInstance } from "@/lib/fetch";
import { InclusionSchema, InclusionSchemaWithId } from "./inclusion.typing";

export const listInclusion = async () => {
  return await apiInstance.get("/api/v1/inclusion", {
    withCredentials: true,
  });
};

export const createInclusion = async (data: InclusionSchema) => {
  return await apiInstance.post("/api/v1/inclusion", data, {
    withCredentials: true,
  });
};

export const updateInclusion = async (data: InclusionSchemaWithId) => {
  return await apiInstance.patch(`/api/v1/inclusion/${data._id}`, data, {
    withCredentials: true,
  });
};

export const getInclusionById = async (id: string) => {
  return await apiInstance.get(`/api/v1/inclusion/${id}`, {
    withCredentials: true,
  });
};

export const removeInclusionById = async (id: string) => {
  return await apiInstance.delete(`/api/v1/inclusion/${id}`, {
    withCredentials: true,
  });
};

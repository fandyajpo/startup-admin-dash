import { apiInstance } from "@/lib/fetch";

export const listUser = async () => {
  return await apiInstance.get("/api/v1/user", {
    withCredentials: true,
  });
};

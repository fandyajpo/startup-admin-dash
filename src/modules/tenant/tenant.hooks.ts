import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTenant,
  getTenantByid,
  listTenant,
  removeTenantById,
  updateTenant,
} from "./tenant.query";
import { TenantSchema, TenantSchemaWithId } from "./tenant.typing";
import { useParams } from "react-router-dom";
import { queryClient } from "@/lib/queryClient";
import { toast } from "sonner";

export const useGetTenant = () => {
  const queryKey = ["LIST_TENANT"];
  const queryFn = async () => await listTenant();
  return useQuery({ queryKey, queryFn });
};

export const useCreateTenant = () => {
  const mutationKey = ["CREATE_TENANT"];
  const mutationFn = async (data: TenantSchema) => await createTenant(data);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => {
      toast.success("success create");
      queryClient.invalidateQueries({ queryKey: ["LIST_TENANT"] });
    },
  });
};

export const useUpdateTenant = () => {
  const mutationKey = ["UPDATE_TENANT"];
  const mutationFn = async (data: TenantSchemaWithId) =>
    await updateTenant(data);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (updatedTenant) => {
      toast.success("success update");
      queryClient.invalidateQueries({ queryKey: ["LIST_TENANT"] });
      queryClient.invalidateQueries({
        queryKey: [
          "GET_TENANT_BY_ID",
          { TenantId: updatedTenant.data?.data?._id },
        ],
      });
    },
  });
};

export const useGetTenantById = () => {
  const params = useParams<{ id: string }>();
  const queryKey = ["GET_TENANT_BY_ID", { TenantId: params?.id }];
  const queryFn = async () => await getTenantByid(params.id);
  return useQuery({ queryKey, queryFn });
};

export const useRemoveTenantById = () => {
  const mutationKey = ["REMOVE_TENANT"];
  const mutationFn = async (data: TenantSchemaWithId) =>
    await removeTenantById(data._id);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (removeTenant) => {
      toast.success("removed");
      queryClient.invalidateQueries({ queryKey: ["LIST_TENANT"] });
      queryClient.removeQueries({
        queryKey: [
          "GET_TENANT_BY_ID",
          { TenantId: removeTenant.data?.data?._id },
        ],
      });
    },
  });
};

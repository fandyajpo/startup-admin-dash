import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createInclusion,
  getInclusionById,
  listInclusion,
  updateInclusion,
  removeInclusionById,
} from "./inclusion.query";
import { InclusionSchema, InclusionSchemaWithId } from "./inclusion.typing";
import { toast } from "sonner";
import { queryClient } from "@/lib/queryClient";
import { useParams } from "react-router-dom";

enum Inclusion {
  LIST_INCLUSION = "LIST_INCLUSION",
  CREATE_INCLUSION = "CREATE_INCLUSION",
  UPDATE_INCLUSION = "UPDATE_INCLUSION",
  REMOVE_INCLUSION = "REMOVE_INCLUSION",
  INCLUSION_BY_ID = "INCLUSION_BY_ID",
}

export const useGetInclusion = () => {
  const queryKey = [Inclusion.LIST_INCLUSION];
  const queryFn = async () => await listInclusion();
  return useQuery({ queryKey, queryFn });
};

export const useCreateInclusion = () => {
  const mutationKey = [Inclusion.CREATE_INCLUSION];
  const mutationFn = async (data: InclusionSchema) =>
    await createInclusion(data);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => {
      toast.success("Inclusion Created");
      queryClient.invalidateQueries({ queryKey: [Inclusion.LIST_INCLUSION] });
    },
  });
};

export const useUpdateInclusion = () => {
  const mutationKey = [Inclusion.UPDATE_INCLUSION];
  const mutationFn = async (data: InclusionSchemaWithId) =>
    await updateInclusion(data);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (inclusion) => {
      toast.success("Updated");
      queryClient.invalidateQueries({ queryKey: [Inclusion.LIST_INCLUSION] });
      queryClient.invalidateQueries({
        queryKey: [
          Inclusion.INCLUSION_BY_ID,
          { InclusionId: inclusion.data?.data?._id },
        ],
      });
    },
  });
};

export const useGetInclusionById = () => {
  const params = useParams<{ id: string }>();
  const queryKey = [Inclusion.INCLUSION_BY_ID, { InclusionId: params?.id }];
  const queryFn = async () => await getInclusionById(params.id);
  return useQuery({ queryKey, queryFn });
};

export const useRemoveInclusionById = () => {
  const mutationKey = [Inclusion.REMOVE_INCLUSION];
  const mutationFn = async (data: InclusionSchemaWithId) =>
    await removeInclusionById(data._id);
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (removeTenant) => {
      toast.success("removed");
      queryClient.invalidateQueries({ queryKey: [Inclusion.LIST_INCLUSION] });
      queryClient.removeQueries({
        queryKey: [
          Inclusion.INCLUSION_BY_ID,
          { InclusionId: removeTenant.data?.data?._id },
        ],
      });
    },
  });
};

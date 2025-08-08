import { useQuery } from "@tanstack/react-query";
import { listUser } from "./user.query";

export const useGetUser = () => {
  const queryKey = ["LIST_USER"];
  const queryFn = async () => await listUser();
  return useQuery({ queryKey, queryFn });
};

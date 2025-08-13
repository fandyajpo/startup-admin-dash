import { useMutation, useQuery } from "@tanstack/react-query";
import { session, signIn, signOut } from "./auth.query";
import { toast } from "sonner";
import { queryClient } from "@/lib/queryClient";
export const useSignIn = () => {
  const mutationKey = ["AUTH_SIGNIN"];
  const mutationFn = async (data: { email: string; password: string }) =>
    await signIn(data.email, data.password);

  return useMutation({
    mutationFn,
    mutationKey,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AUTH_SESSION"] });
      return toast.success("Login Success");
    },
  });
};

export const useSession = () => {
  const queryKey = ["AUTH_SESSION"];
  const queryFn = async () => await session();

  return useQuery({
    queryFn,
    queryKey,
  });
};

export const useSignOut = () => {
  const mutationKey = ["AUTH_SIGNOUT"];
  const mutationFn = async () => await signOut();

  return useMutation({
    mutationFn,
    mutationKey,
    onSuccess: () => {
      queryClient.setQueryData(["AUTH_SESSION"], null);

      // Kalau mau hapus semua query lain
      queryClient.removeQueries({
        predicate: (q) => q.queryKey[0] !== "AUTH_SESSION",
      });
      return toast.success("Login Success");
    },
  });
};

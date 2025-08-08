import { useMutation, useQuery } from "@tanstack/react-query";
import { session, signIn } from "./auth.query";
import { toast } from "sonner";
export const useSignIn = () => {
  const mutationKey = ["AUTH_SIGNIN"];
  const mutationFn = async (data: { email: string; password: string }) =>
    await signIn(data.email, data.password);

  return useMutation({
    mutationFn,
    mutationKey,
    onSuccess: () => {
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

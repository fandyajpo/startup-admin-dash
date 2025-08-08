import { authClient } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  return await authClient.signIn.email({
    email,
    password,
    fetchOptions: {
      onSuccess: (data) => console.log("Success SignIn", data),
      onError: (data) => console.log("Error SignIn", data),
    },
  });
};

export const signUp = async (email: string, password: string, name: string) => {
  return await authClient.signUp.email({
    email,
    password,
    name,
    fetchOptions: {
      onSuccess: (data) => console.log("Success SignUp", data),
      onError: (data) => console.log("Error SignUp", data),
    },
  });
};

export const signOut = async () => {
  return await authClient.signOut({
    fetchOptions: {
      onSuccess: () => console.log("Success SignOut"),
      onError: () => console.log("Error SignOut"),
    },
  });
};

export const session = async () => await authClient.getSession();

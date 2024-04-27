import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  // const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please, verify the new account from the user's email address"
      );
      // navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { signup, isLoading };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading : isUpdating ,mutate: editSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {isUpdating ,editSetting};
}

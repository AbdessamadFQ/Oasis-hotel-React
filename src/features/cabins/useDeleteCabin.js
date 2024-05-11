import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(){
    
    const queryClient = useQueryClient();
    const { isLoading, mutate : deleteCabin } = useMutation({
        mutationFn:  deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin deleted Succefully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return {isLoading , deleteCabin}
}
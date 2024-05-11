import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi} from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {isLoading, mutate : logout} = useMutation({
        mutationFn : logoutApi,
        onSuccess : () => {
            queryClient.removeQueries()
            toast.success("You have loged out correctly")
            navigate('/login',{replace : true})
        }
    })   

    return {isLoading , logout}
}
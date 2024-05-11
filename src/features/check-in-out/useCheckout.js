import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking as updateBookingApi} from "../../services/apiBookings";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkoutBooking,isLoading : isCheckingOut } = useMutation({
    mutationFn: (bookingId) => updateBookingApi(bookingId,{
      status : 'checked-out'
    }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully checked out`);
      queryClient.invalidateQueries({
        // queryKey: ["bookings"],
        active : true
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {checkoutBooking,isCheckingOut};
}

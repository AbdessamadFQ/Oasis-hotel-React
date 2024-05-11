import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking as updateBookingApi} from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const { mutate: checkinBooking,isLoading : isCheckingIn } = useMutation({
    mutationFn: ({bookingId,breakfast}) => updateBookingApi(bookingId,{
      status : 'checked-in',
      isPaid : true,
      ...breakfast
    }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully checked in`);
      queryClient.invalidateQueries({
        // queryKey: ["bookings"],
        active : true
      });
      navigate('/')
    },
    onError: (err) => toast.error(err.message),
  });
  return {checkinBooking,isCheckingIn};
}

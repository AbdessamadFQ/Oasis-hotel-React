import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const {bookingId} = useParams(); // return the params bookingId from URL
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking",bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isLoading, booking, error };
}

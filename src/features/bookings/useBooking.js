import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    //not to try refetch data 3x, because if there is no data at 1st it wouldn`t be on the 3rd try
    retry: false,
  });

  return { isLoading, booking, error };
}

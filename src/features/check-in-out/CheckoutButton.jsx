/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkoutBooking, isCheckingOut } = useCheckout();
  return (
    <Button
      variations="secondary"
      sizes="small"
      onClick={() => checkoutBooking(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;

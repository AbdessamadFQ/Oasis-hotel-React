import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function Stats({ bookings, confirmStays, numDays, cabinCount }) {
  const numBookings = bookings.length;
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const totalCheckins = confirmStays.length;

  const totalStayNights = confirmStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );
  const ocuupation = (totalStayNights / (numDays * cabinCount)) * 100;

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(ocuupation) + '%'}
      />
    </>
  );
}

export default Stats;

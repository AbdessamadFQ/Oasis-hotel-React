import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useGetCabins } from "../cabins/useGetCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActitvity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmStays : confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useGetCabins();
  if (isLoading || isLoadingStays || isLoadingCabins) return <Spinner />;
  const cabinCount = cabins.length;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <TodayActitvity/>
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

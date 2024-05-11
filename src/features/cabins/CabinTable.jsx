import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useGetCabins } from "./useGetCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useGetCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all'
  // filtre
  let filteredCabins;
  if(filterValue === 'all') filteredCabins = cabins
  if(filterValue === 'no-discount') filteredCabins = cabins.filter((cabin) => cabin.discount === 0)
  if(filterValue === 'with-discount') filteredCabins = cabins.filter((cabin) => cabin.discount !== 0)
  
  //  Sorting
  const sortBy = searchParams.get('sortBy') || 'name-asc'
  const [field,direction] = sortBy.split('-');
  const sortedCabins = filteredCabins.sort((a,b) => direction==='asc' ? a[field] - b[field] : b[field] - a[field])

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

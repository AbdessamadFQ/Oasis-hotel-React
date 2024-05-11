import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window> */}
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {/* this why is not perfect the Modal must be responsable of closing and opening it self not based on an external state */}
//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <CreateCabinForm onClose={() => setShowModal((show) => !show)}/>
//         </Modal>
//       )}
//     </div>
//   );
// }

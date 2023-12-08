import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactById } from "../../../store/reducers/contact/contact.action";

const ModalProspect = () => {
  const { detail_contact } = useSelector((state) => state.contact);

  return (
    <>
      <dialog id={`modalprospect`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Detail Prospect</h3>
          <div className="grid mt-3 grid-cols-2 gap-3">
            <div>
              <p className="font-semibold">User Name</p>
              <p>
                {detail_contact.user_first_name} -{" "}
                {detail_contact.user_first_name}
              </p>
            </div>
            <div>
              <p className="font-semibold">Fullname</p>
              <p>
                {detail_contact.first_name} {detail_contact.last_name}
              </p>
            </div>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p>{detail_contact.phone_number}</p>
            </div>
            <div>
              <p className="font-semibold">Home Number</p>
              <p>{detail_contact.home_number}</p>
            </div>
            <div>
              <p className="font-semibold">Work Number</p>
              <p>{detail_contact.work_number}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>{detail_contact.email}</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-[#0000004d]">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalProspect;

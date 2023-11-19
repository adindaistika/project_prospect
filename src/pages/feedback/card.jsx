import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import {
  deleteFeedbackById,
  getFeedback,
} from "../../../store/reducers/feedback/feedback.action";
import PopupEdit from "./popupEdit";

const { IconStarFilled } = require("@tabler/icons-react");

const Card = ({ comment }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    let konfirmasi = confirm("Are you sure?");

    if (konfirmasi) {
      dispatch(deleteFeedbackById({ id }));
      dispatch(getFeedback());
    }
  };
  return (
    <div className="flex flex-col gap-1 p-3 rounded-md shadow-md">
      <div className="flex justify-between">
        <p>
          From: <span>@adinda</span>
        </p>
        <span className="flex items-center gap-2">
          4 <IconStarFilled width={18} />
        </span>
      </div>
      <p className="font-semibold opacity-80">{comment.feedback_message}</p>
      <div className="flex justify-end items-center cursor-pointer gap-2">
        <div
          onClick={() => handleDelete(comment.id)}
          className="bg-transparent p-1 w-max"
        >
          <IconTrash color="red" />
        </div>
        <div
          onClick={() =>
            document.getElementById(`feedback_edit_${comment.id}`).showModal()
          }
          className="bg-transparent p-1 w-max"
        >
          <IconPencilMinus color="green" />
        </div>
        <PopupEdit id={comment.id} data={comment} />
      </div>
    </div>
  );
};

export default Card;

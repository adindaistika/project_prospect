import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
  getFeedback,
  putFeedback,
} from "../../../store/reducers/feedback/feedback.action";
import { useEffect, useState } from "react";

const PopupEdit = ({ id, data }) => {
  const dispatch = useDispatch();
  const [rate, setRating] = useState(data.id);
  const schema = yup.object({
    rating: yup.number().required(),
    comment: yup.string().required(),
  });

  const {
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRatingChange = (value) => {
    setRating(value);
    setValue("rating", value);
  };

  const kirimData = (item) => {
    dispatch(putFeedback(item));
    dispatch(getFeedback());
    reset();
  };

  useEffect(() => {
    setValue("rating", data.id);
    setValue("comment", data.feedback_message);
  }, []);

  return (
    <>
      <dialog id={`feedback_edit_${id}`} className="modal">
        <form onSubmit={handleSubmit(kirimData)} className="modal-box">
          <p>{errors.rating && errors.rating.message}</p>
          <p>{errors.comment && errors.comment.message}</p>
          <p className="text-primary font-semibold my-3">Rating</p>
          <div className="rating">
            <input
              onChange={() => handleRatingChange(1)}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rate == 1}
            />
            <input
              onChange={() => handleRatingChange(2)}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rate == 2}
            />
            <input
              onChange={() => handleRatingChange(3)}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rate == 3}
            />
            <input
              onChange={() => handleRatingChange(4)}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rate == 4}
            />
            <input
              onChange={() => handleRatingChange(5)}
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked={rate == 5}
            />
          </div>
          <label className="block my-3 w-full" htmlFor="comment">
            <span className="text-primary font-semibold">Comment</span>
            <input
              type="text"
              className="w-full my-3 border-b border-primary outline-none"
              name="comment"
              id="comment"
              {...register("comment")}
            />
          </label>
          <button
            type="submit"
            name="submit"
            className="font-semibold text-xs w-full bg-primary p-2 text-white rounded-md"
          >
            Edit Feedback
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PopupEdit;

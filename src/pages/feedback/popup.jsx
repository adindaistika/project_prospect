import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import {
  getFeedback,
  postFeedback,
} from "../../../store/reducers/feedback/feedback.action";
import { useState } from "react";

const Popup = () => {
  const dispatch = useDispatch();
  const [rate, setRating] = useState(1);
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

  const kirimData = (data) => {
    dispatch(postFeedback(data));
    dispatch(getFeedback());
    reset();
    document.getElementById("my_modal_2").close();
  };

  return (
    <>
      <button
        className="bg-sky-600 text-white text-xs font-semibold py-2 px-3 rounded-md"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add Feedback
      </button>
      <dialog id="my_modal_2" className="modal">
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
            Send Feedback
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Popup;

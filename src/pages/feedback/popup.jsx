
const Popup = ({ submit }) => {
  return (
    <>
      <button
        className="bg-sky-600 text-white text-xs font-semibold py-2 px-3 rounded-md"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add Feedback
      </button>
      <dialog id="my_modal_2" className="modal">
        <form onSubmit={submit} className="modal-box">
          <p className="text-primary font-semibold my-3">Rating</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <label className="block my-3 w-full" htmlFor="comment">
            <span className="text-primary font-semibold">Comment</span>
            <input
              type="text"
              className="w-full my-3 border-b border-primary outline-none"
              name="comment"
              id="comment"
            />
          </label>
          <button
            type="submit"
            onClick={() => document.getElementById("my_modal_2").close()}
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
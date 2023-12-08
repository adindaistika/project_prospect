import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTutorialById } from "../../../store/reducers/tutorial/tutorial.action";
import { useParams } from "next/navigation";

export default function Tutorials() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data_tutorial_id } = useSelector((state) => state.tutorial);

  useEffect(() => {
    dispatch(getTutorialById({ id: params.id }));
    console.log("Data tutorial by id ", data_tutorial_id);
  }, []);

  return (
    <main className="p-5 rounded-lg shadow-md border bg-white text-black">
      <div>
        <iframe
          width="560"
          height="315"
          className="w-full rounded-lg mb-5"
          src={
            data_tutorial_id.video_url ||
            "https://www.youtube.com/embed/W1MlXE5fBLM?si=dYQyTvSauKz5lNeU"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="collapse border collapse-arrow">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-semibold">
          {data_tutorial_id.title || `Tutorial ${params.id}`}
        </div>
        <div className="collapse-content pt-3 border-t">
          <p>{data_tutorial_id.description || "Ini deskripsinya"}</p>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "TUTORIALS" },
  };
}

"use client";
import { IconBell } from "@tabler/icons-react";
import Popup from "./popup";
import Card from "./card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedback } from "../../../store/reducers/feedback/feedback.action";
import OverlayLoading from "@/components/OverlayLoading";

export default function Feedback() {
  const dispatch = useDispatch();
  const [busy, set_busy] = useState(false);
  const { data_feedback } = useSelector((state) => state.feedback);

  useEffect(() => {
    set_busy(true);
    dispatch(getFeedback());
    set_busy(false);
  }, []);
  return (
    <>
      {!busy ? (
        <main>
          <Popup />
          {data_feedback.length > 0 ? (
            <div className="grid md:grid-cols-3 my-5 gap-3">
              {data_feedback.map((item, i) => (
                <Card key={i} comment={item} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full my-5 grid place-items-center">
              <h5 className="mt-7 flex items-center gap-3 font-semibold">
                <span className="loading loading-spinner loading-lg"></span>{" "}
                Data sedang kosong...
              </h5>
            </div>
          )}
        </main>
      ) : (
        <OverlayLoading />
      )}
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: { title: "FEEDBACK" },
  };
}

"use client";
import { IconBell } from "@tabler/icons-react";
import Popup from "./popup";
import Card from "./card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedback } from "../../../store/reducers/feedback/feedback.action";

export default function Feedback() {
  const dispatch = useDispatch();
  const { data_feedback } = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedback());
  }, []);
  return (
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
            <span className="loading loading-spinner loading-lg"></span> Data
            sedang kosong...
          </h5>
        </div>
      )}
    </main>
  );
}
export async function getServerSideProps() {
  return {
    props: { title: "FEEDBACK" },
  };
}

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
      <div className="grid md:grid-cols-3 my-5 gap-3">
        {data_feedback.map((item, i) => (
          <Card key={i} comment={item} />
        ))}
      </div>
    </main>
  );
}
export async function getServerSideProps() {
  return {
    props: { title: "FEEDBACK" },
  };
}

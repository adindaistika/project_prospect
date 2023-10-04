"use client";
import { IconBell } from "@tabler/icons-react";
import Popup from "./Popup";
import Card from "./Card";
import { useState } from "react";

export default function Feedback() {
  const [comment, setComment] = useState([]);
  const feed = (e) => {
    e.preventDefault();
    setComment([...comment, { comment: e.target[5].value }]);
    e.target[5].value = "";
  };
  return (
    <main>
      <Popup submit={feed} />
      <div className="grid grid-cols-3 my-5 gap-3">
        {comment.map((item, index) => (
          <Card key={index} comment={item.comment} />
        ))}
      </div>
    </main>
  );
};
export async function getServerSideProps() {
  return {
    props: {title: 'FEEDBACK'},
  };
}
"use client";
import { IconBell } from "@tabler/icons-react";
import Popup from "./Popup";
import Card from "./Card";
import { useState } from "react";

const Feedback = () => {
  const [comment, setComment] = useState([]);
  const feed = (e) => {
    e.preventDefault();
    setComment([...comment, { comment: e.target[5].value }]);
    e.target[5].value = "";
  };
  return (
    <main>
      <header className="flex flex-col sm:flex-row justify-between lg:items-center">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-black lg:text-left font-semibold">FEEDBACK</h1>
        </div>
        <div className="flex gap-3 items-center">
          <IconBell color="#0B588D" />
          <img src="/static/auth/profile.jpeg" className="w-[50px] m-auto" alt="Logo"/>
        </div>
      </header>
      <Popup submit={feed} />
      <div className="grid grid-cols-3 my-5 gap-3">
        {comment.map((item, index) => (
          <Card key={index} comment={item.comment} />
        ))}
      </div>
    </main>
  );
};
export default Feedback;
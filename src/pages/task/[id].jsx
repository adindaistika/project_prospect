import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskById } from "../../../store/reducers/task/task.action";
import OverlayLoading from "@/components/OverlayLoading";

const TaskDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [busy, set_busy] = useState(false);
  const { data_task_id } = useSelector((state) => state.task);

  useEffect(() => {
    set_busy(true);
    dispatch(getTaskById({ id: params.id }));
    set_busy(false);
  }, []);
  return (
    <>
      {!busy ? (
        <div className="space-y-2 shadow-md bg-white rounded-md">
          <div className="w-full p-3">
            <p className="font-bold">Name</p>
            <p className="font-semibold text-gray-400">
              {data_task_id.user_first_name}-{data_task_id.user_last_name}
            </p>
          </div>
          <div className="w-full p-3 border-t-2">
            <p className="font-bold">Title</p>
            <p className="font-semibold text-gray-400">{data_task_id.title}</p>
          </div>
          {/* <div className="w-full p-3 border-t-2">
            <p className="font-bold">Relate to</p>
            <p className="font-semibold text-gray-400">
              {data_task_id.relate_to}
            </p>
          </div> */}
          <div className="grid grid-cols-2">
            <div className="w-full p-3 border-t-2">
              <p className="font-bold">Priority</p>
              <p className="font-semibold text-gray-400">
                {data_task_id.priority}
              </p>
            </div>
            <div className="w-full p-3 border-l-2 border-t-2">
              <p className="font-bold">Status</p>
              <p className="font-semibold text-gray-400">
                {data_task_id.status}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full p-3 border-t-2">
              <p className="font-bold">Start Date</p>
              <p className="font-semibold text-gray-400">
                {data_task_id.due_date}
              </p>
            </div>
            <div className="w-full p-3 border-l-2 border-t-2">
              <p className="font-bold">End Date</p>
              <p className="font-semibold text-gray-400">
                {data_task_id.due_time}
              </p>
            </div>
          </div>
          <div className="w-full p-3 border-t-2">
            <p className="font-bold">Time Reminder</p>
            <p className="font-semibold text-gray-400">
              {data_task_id.reminder}
            </p>
          </div>
          <div className="w-full p-3 border-t-2">
            <p className="font-bold">Note Event</p>
            <p className="font-semibold text-gray-400">{data_task_id.note}</p>
          </div>
        </div>
      ) : (
        <OverlayLoading />
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "DETAIL TASK" },
  };
}

export default TaskDetail;

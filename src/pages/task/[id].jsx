import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskById } from "../../../store/reducers/task/task.action";

const TaskDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data_task_id } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTaskById({ id: params.id }));
    console.log(data_task_id);
  }, []);
  return (
    <div className="space-y-2">
      <div className="w-full p-3 rounded-md shadow-md">
        <p className="font-bold">Name</p>
        <p className="font-semibold text-gray-400">
          {data_task_id.user_first_name}-{data_task_id.user_last_name}
        </p>
      </div>
      <div className="w-full p-3 rounded-md shadow-md">
        <p className="font-bold">Title</p>
        <p className="font-semibold text-gray-400">{data_task_id.title}</p>
      </div>
      <div className="w-full p-3 rounded-md shadow-md">
        <p className="font-bold">Relate to</p>
        <p className="font-semibold text-gray-400">{data_task_id.relate_to}</p>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-full p-3 rounded-md shadow-md">
          <p className="font-bold">Priority</p>
          <p className="font-semibold text-gray-400">{data_task_id.priority}</p>
        </div>
        <div className="w-full p-3 rounded-md shadow-md">
          <p className="font-bold">Status</p>
          <p className="font-semibold text-gray-400">{data_task_id.status}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full p-3 rounded-md shadow-md">
          <p className="font-bold">Start Date</p>
          <p className="font-semibold text-gray-400">{data_task_id.due_date}</p>
        </div>
        <div className="w-full p-3 rounded-md shadow-md">
          <p className="font-bold">End Date</p>
          <p className="font-semibold text-gray-400">{data_task_id.due_time}</p>
        </div>
      </div>
      <div className="w-full p-3 rounded-md shadow-md">
        <p className="font-bold">Time Reminder</p>
        <p className="font-semibold text-gray-400">{data_task_id.reminder}</p>
      </div>
      <div className="w-full p-3 rounded-md shadow-md">
        <p className="font-bold">Note Event</p>
        <p className="font-semibold text-gray-400">{data_task_id.note}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "DETAIL TASK" },
  };
}

export default TaskDetail;

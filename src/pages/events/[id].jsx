import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventById } from "../../../store/reducers/events/events.action";

const EventsDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { data_event_id } = useSelector((state) => state.event);

    useEffect(() => {
        dispatch(getEventById({ id: params.id }));
    }, []);
    return (
        <div className="space-y-2">
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Meeting With</p>
                <p className="font-semibold text-gray-400">
                    {data_event_id.meeting_with}
                </p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Meeting Type</p>
                <p className="font-semibold text-gray-400">
                    {data_event_id.meeting_type}
                </p>
            </div>
            <h5 className="m-2 font-semibold text-xl">Detail Acara</h5>
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Title</p>
                <p className="font-semibold text-gray-400">{data_event_id.title}</p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Note Event</p>
                <p className="font-semibold text-gray-400">{data_event_id.note}</p>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-full p-3 rounded-md shadow-md">
                    <p className="font-bold">Start Date</p>
                    <p className="font-semibold text-gray-400">
                        {data_event_id.start_date}
                    </p>
                </div>
                <div className="w-full p-3 rounded-md shadow-md">
                    <p className="font-bold">End Date</p>
                    <p className="font-semibold text-gray-400">
                        {data_event_id.end_date}
                    </p>
                </div>
            </div>
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Lokasi</p>
                <p className="font-semibold text-gray-400">
                    {data_event_id.longitude} - {data_event_id.location}
                </p>
            </div>
            <div className="w-full p-3 rounded-md shadow-md">
                <p className="font-bold">Set Time Reminder</p>
                <p className="font-semibold text-gray-400">{data_event_id.reminder}</p>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: { title: "DETAIL EVENT" },
    };
}

export default EventsDetail;
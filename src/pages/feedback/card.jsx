const { IconStarFilled } = require("@tabler/icons-react");

const Card = ({ comment }) => {
    return (
        <div className="flex flex-col gap-1 p-3 rounded-md shadow-md">
            <div className="flex justify-between">
                <p>
                    From: <span>@adinda</span>
                </p>
                <span className="flex items-center gap-2">
                    4 <IconStarFilled width={18} />
                </span>
            </div>
            <p className="font-semibold opacity-80">{comment}</p>
        </div>
    );
};

export default Card;
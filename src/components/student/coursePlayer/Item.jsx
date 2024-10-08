import { useDispatch } from "react-redux";
import { addVideo } from "../../../feature/video/videoSlice";

// eslint-disable-next-line react/prop-types
const Item = ({ info }) => {
    const { title, views, duration } = info ?? {};
    const dispatch = useDispatch()

    // handle video
    const handleVideo = (video) => {
        dispatch(addVideo(video))
    };

    return (
        <div
            onClick={() => handleVideo(info)}
            className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3"
        >
            {/* <!-- Thumbnail --> */}
            <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
            </svg>
            {/* <!-- Description --> */}
            <div className="flex flex-col w-full">
                <p className="text-slate-50 text-sm font-medium">{title}</p>

                <div>
                    <span className="text-gray-400 text-xs mt-1">
                        {duration}
                    </span>
                    <span className="text-gray-400 text-xs mt-1"> | </span>
                    <span className="text-gray-400 text-xs mt-1">{views}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;

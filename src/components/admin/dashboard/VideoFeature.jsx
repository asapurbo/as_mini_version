import { Link } from "react-router-dom";

const VideoFeature = () => {
    return (
        <Link to="/admin/videos" className="dashboard-item-card">
            <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-yellow-500"
            >
                <path
                    strokeLinecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
            </svg>

            <p className="text-slate-200 mt-3 ">Videos</p>
        </Link>
    );
};

export default VideoFeature;

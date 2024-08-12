import Item from "../../admin/assingnment/Item";

const Assingnment = () => {
    return (
        <>
            <nav className="shadow-md">
                <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
                    <img
                        className="h-10"
                        src="../assets/image/learningportal.svg"
                    />
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">Admin</h2>
                        <button className="flex gap-2 items-center px-4 py-1 rounded-full text-sm transition-all bg-red-600 hover:bg-red-700 font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-full px-5 lg:px-20">
                    <div className="px-3 py-20 bg-opacity-10">
                        <div className="w-full flex">
                            <button className="btn ml-auto">
                                Add Assignment
                            </button>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th className="table-th">Title</th>
                                        <th className="table-th">
                                            Video Title
                                        </th>
                                        <th className="table-th">Mark</th>
                                        <th className="table-th">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-600/50">
                                    <Item />
                                    <Item />
                                    <Item />
                                    <Item />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Assingnment;

import { useEffect, useState } from 'react';
import { usePostDataMutation } from '../../../feature/post/postApi';
import { useSelector } from 'react-redux';
import Error from '../../../ui/Error';
import { useContext } from 'react';
import { IsContext } from '../../../contexts/DataContexts';

// eslint-disable-next-line react/prop-types
const Modal = ({ assingnmentData, ...agr }) => {
    const conData = useContext(IsContext);

    const [postData, { isSuccess, data }] = usePostDataMutation();

    const student = useSelector((state) => state.userReducer.user);
    const { id: assignment_id, title } = assingnmentData ?? {};

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (_) => {
        const date = new Date().toISOString();
        _.preventDefault();
        setError(false);

        if (name === student.name) {
            postData({
                data: {
                    student_id: student.id,
                    student_name: student.name,
                    assignment_id,
                    title,
                    createdAt: date,
                    totalMark: 100,
                    mark: null,
                    repo_link: url,
                    status: 'pending',
                },
                url: 'assignmentMark',
            });
        } else {
            setError('Incorrect name');
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setName('');
            setUrl('');
            conData.setState([isSuccess, data])
        }
    }, [isSuccess, conData, data]);

    return (
        <>
            <div
                {...agr}
                className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
            ></div>
            <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Submit Assignment
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="to" className="sr-only">
                                Name
                            </label>
                            <input
                                id="to"
                                name="to"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                URL
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                placeholder="Enter Assignment URL"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                    </div>
                    {error && <Error message={error} />}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Submit Assignment
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modal;

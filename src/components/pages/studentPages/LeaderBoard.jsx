import Item from '../../student/leaderBoard/Item';
import { useGetDataQuery } from '../../../feature/get/getApi';
import useMap from '../../../hook/useMap';
import useResult from '../../../hook/useResult';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

const LeaderBoard = () => {
    const [final, setFinal] = useState([]);
    const [getInfo, setGetInfo] = useState({})
    const quizMarkDataFatch = useGetDataQuery('quizMark');
    const assignmentMarkDataFatch = useGetDataQuery('assignmentMark');
    const { id, name } = useSelector((state) => {
        return state.userReducer.user;
    });

    const { quizData, assignmentData } = useMap(
        [quizMarkDataFatch, assignmentMarkDataFatch],
        (data) => {
            const [quizData, assignmentData] = data ?? [];

            if (Array.isArray(quizData) && Array.isArray(assignmentData)) {
                return { quizData, assignmentData };
            } else {
                return {};
            }
        }
    );

    const quizDataMarkData = useResult(quizData);
    const assignmentMarkData = useResult(assignmentData);

    useEffect(() => {
        if (quizDataMarkData.length > 0 && assignmentMarkData.length > 0) {
            const quizResult = quizDataMarkData?.map((item) => {
                const user = item[0];
                const result = item.result;
                return {
                    user: {
                        student_id: user.student_id,
                        student_name: user.student_name,
                        category: 'quiz',
                    },
                    result,
                };
            });

            const assignmentResult = assignmentMarkData?.map((item) => {
                const user = item[0];
                const result = item.result;
                return {
                    user: {
                        student_id: user.student_id,
                        student_name: user.student_name,
                        category: 'assignment',
                    },
                    result,
                };
            });

            // find out large array
            const largeMapItem =
                quizResult.length >= assignmentResult.length
                    ? quizResult
                    : assignmentResult;

            // find out petty array
            const pettyMapItem =
                quizResult.length >= assignmentResult.length
                    ? assignmentResult
                    : quizResult;

            const combinedResults = largeMapItem
                .map((largeItem) => {
                    const matchingItem = pettyMapItem.find((pettyItem) => {
                        return (
                            largeItem.user.student_id ===
                            pettyItem.user.student_id
                        );
                    });

                    if (matchingItem) {
                        return {
                            userName: largeItem.user.student_name,
                            userId: largeItem.user.student_id,
                            totalResult: largeItem.result + matchingItem.result,
                            quiz:
                                largeItem.user.category === 'quiz'
                                    ? largeItem.result
                                    : matchingItem.result,
                            assignment:
                                largeItem.user.category === 'assignment'
                                    ? largeItem.result
                                    : matchingItem.result,
                        };
                    } else {
                        return {
                            userName: largeItem.user.student_name,
                            userId: largeItem.user.student_id,
                            totalResult: largeItem.result,
                            quiz:
                                largeItem.user.category === 'quiz'
                                    ? largeItem.result
                                    : 0,

                            assignment:
                                largeItem.user.category === 'assignment'
                                    ? largeItem.result
                                    : 0,
                        };
                    }
                })
                .sort((a, b) => {
                    return b.totalResult - a.totalResult;
                });

            setFinal(combinedResults);
        }
    }, [quizDataMarkData, assignmentMarkData]);

    let content = null;

    if (final?.length > 0) {
        content = final?.map((item, index) => {
            return <Item key={index} info={item} rank={index} />;
        });
    }

    // yourself information
    useEffect(() => {
        if (final?.length > 0) {
            const yourselfInfo = final.map((info, index) => {
                if (info.userId === id) {
                    return {
                        ...info,
                        rank: index + 1,
                    };
                }
            }).filter(i => i !== undefined);

            setGetInfo(yourselfInfo[0])
        }
    }, [final, id])


    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <div>
                    <h3 className="text-lg font-bold">
                        Your Position in Leaderboard
                    </h3>
                    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                        <thead>
                            <tr>
                                <th className="table-th !text-center">Rank</th>
                                <th className="table-th !text-center">Name</th>
                                <th className="table-th !text-center">
                                    Quiz Mark
                                </th>
                                <th className="table-th !text-center">
                                    Assignment Mark
                                </th>
                                <th className="table-th !text-center">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-2 border-cyan">
                                <td className="table-td text-center font-bold">
                                    {getInfo?.rank ? getInfo?.rank : 0}
                                </td>
                                <td className="table-td text-center font-bold capitalize">
                                    {getInfo?.userName ? getInfo?.userName : name}
                                </td>
                                <td className="table-td text-center font-bold">
                                    {getInfo?.quiz ? getInfo?.quiz : 0}
                                </td>
                                <td className="table-td text-center font-bold">
                                    {getInfo?.assignment ? getInfo?.assignment : 0}
                                </td>
                                <td className="table-td text-center font-bold">
                                    {getInfo?.totalResult ? getInfo?.totalResult : 0}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="my-8">
                    <h3 className="text-lg font-bold">Top 20 Result</h3>
                    <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                        <thead>
                            <tr className="border-b border-slate-600/50">
                                <th className="table-th !text-center">Rank</th>
                                <th className="table-th !text-center">Name</th>
                                <th className="table-th !text-center">
                                    Quiz Mark
                                </th>
                                <th className="table-th !text-center">
                                    Assignment Mark
                                </th>
                                <th className="table-th !text-center">Total</th>
                            </tr>
                        </thead>

                        <tbody>{content}</tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default LeaderBoard;

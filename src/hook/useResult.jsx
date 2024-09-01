import { useGetDataQuery } from '../feature/get/getApi';
import useMap from './useMap';
import { useEffect, useState } from 'react';

const useResult = (quizMarkData) => {
    const [sortedData, setSortedData] = useState([]);
    const userDataFatch = useGetDataQuery('users');
    let userDatas = useMap(userDataFatch, ({ data }) => {
        if (Array.isArray(data)) {
            return data;
        }
    });

    useEffect(() => {
        let userDataArray = [];

        // find out the student of the quiz
        if (userDatas) {
            for (let i = 0; i <= userDatas?.length; i++) {
                let arr2 = [];
                userDataArray.push(arr2);
                arr2.splice(0);

                if (quizMarkData) {
                    for (let j = 0; j <= quizMarkData?.length; j++) {
                        if (userDatas[i]?.id === quizMarkData[j]?.student_id) {
                            arr2.push(quizMarkData[j]);
                        }
                    }
                }
            }
        }

        if (userDataArray.length > 0) {
            // quiz data
            let quizResult = userDataArray?.filter((i) => {
                if (i[0] !== undefined && i.length > 0) {
                    return i;
                }
            });

            let y_ = [];


            for (let z = 0; z <= quizResult?.length; z++) {

                let x_a_ = quizResult[z]?.reduce(
                    (total, num) => {

                        // console.log(num);

                        total.totalMark += num.totalMark;
                        total.mark += num.mark;
                        return total;
                    },
                    { totalMark: 0, mark: 0 }
                );

                y_.push({
                    ...quizResult[z],
                    intotalMark: x_a_?.totalMark,
                    result: x_a_?.mark,
                });
            }

            let z_ = y_
                .filter((i) => i.intotalMark !== undefined)
                .sort((a, b) => b.result - a.result);


            setSortedData(z_);
        }
    }, [quizMarkData, userDatas]);

    // console.log(sortedData);

    return sortedData
};

export default useResult;

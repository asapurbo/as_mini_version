import { useDispatch, useSelector } from 'react-redux';
import { onQuiz } from '../../../feature/utils/utilsSlice';
import { useEffect, useState } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
const Option = ({ opInfo, id: itemID, videoId }) => {
    const [isTrue, setIsTrue] = useState(null);

    const dispatch = useDispatch();
    const { option, id } = opInfo ?? {};
    const data = useSelector((state) => {
        return state?.utils?.quizinfo[0]?.quizInfo;
    });

    useEffect(() => {
        setIsTrue(false)
        if (Array.isArray(data) && itemID) {
            for (let i = 0; i <= data?.length; i++) {
                for (let j = 0; j <= data[i]?.isTrue?.length; j++) {
                    const { id } = opInfo ?? {};
                    if (data[i]?.isTrue[j]?.id === id && data[0].videoId === +videoId) {
                        setIsTrue(data[i]?.isTrue[j]?.isCorrect);
                    }
                }
            }
        }
    }, [data, opInfo, itemID, videoId]);


    //  console.log(isTrue);

    const hc = (fn, duration) => {
        let id;

        return (info) => {
            clearTimeout(id);
            id = setTimeout(() => {
                fn(info);
            }, duration);
        };
    };
    const fn = (info) => {
        if (info?.isCorrect) {
            dispatch(
                onQuiz({
                    data: { id: info.id, isCorrect: true },
                    itemID: `${'item_' + itemID}`,
                    id: itemID,
                    videoId,
                })
            );
        } else {
            dispatch(
                onQuiz({
                    data: { id: info.id, isCorrect: false },
                    itemID: `${'item_' + itemID}`,
                    id: itemID,
                    videoId,
                })
            );
        }
    };

    const handleClick = hc(fn, 100);

    return (
        <label
            className="flex justify-between"
            onClick={() => handleClick(opInfo)}
            htmlFor={`${option}${id}`}
            style={{
                background: isTrue && 'rgb(71 85 105 / 50%)',
                color: isTrue && 'white',
            }}
        >
            <input type="checkbox" id={`${option}${id}`} />
            {option}
            {isTrue && <IoCheckmarkDone className="text-3xl" />}
        </label>
    );
};

export default Option;

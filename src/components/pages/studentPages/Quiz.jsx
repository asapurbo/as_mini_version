import { useParams } from 'react-router-dom';
import Nav from '../../student/quiz/Nav';
import { useGetDataQuery } from '../../../feature/get/getApi';
import useMap from '../../../hook/useMap';
import Item from '../../student/quiz/Item';
import { usePostDataMutation } from '../../../feature/post/postApi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleQuizInfo } from '../../../feature/utils/utilsSlice';

const Quiz = () => {
    const [exist, setExist] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { videoId } = useParams();
    const quizzesData = useGetDataQuery(`quizzes?video_id=${videoId}`);
    const [postData, { isSuccess }] = usePostDataMutation();
    const { id: student_id, name: student_name } =
        useSelector((state) => state?.userReducer?.user) ?? {};
    const quizMarkData = useGetDataQuery(
        `quizMark?video_id=${videoId}&student_id=${student_id}`
    );

    let didAlreadyQuizExist = useMap(quizMarkData, (data) => {
        if (Array.isArray(data?.data)) {
            return data.data;
        }
    });
    // if a quiz already exists then
    useEffect(() => {
        if (didAlreadyQuizExist) {
            dispatch(handleQuizInfo(didAlreadyQuizExist));
            setExist(true);
        }
    }, [dispatch, didAlreadyQuizExist]);

    // total Correct Or Incorrect
    const totalCorrectOrIncorrect = useSelector((state) => {
        const stateValue = Object.values(state?.utils?.item);

        if (stateValue.length > 0) {
            const trueData = [];
            const falseData = [];
            for (let i = 0; i <= stateValue.length; i++) {
                const result = stateValue[i]?.isTrue.every(
                    (i) => i.isCorrect === true
                );

                if (result === true && stateValue[i]?.isTrue?.length > 0) {
                    trueData.push(result);
                } else if (result === false) {
                    falseData.push(result);
                }
            }

            return { trueData, falseData, stateValue };
        }
    });

    const content = useMap(quizzesData, ({ data }) => {
        if (data) {
            return data.map((i) => (
                <Item key={i.id} info={i} videoId={videoId} />
            ));
        }
    });

    const handleSubmit = (_) => {
        _.preventDefault();
        // video title find out
        const video_title = Array.isArray(content)
            ? content[0]?.props?.info?.video_title
            : null;

        // total Quiz
        const totalQuiz = Array.isArray(content) ? content.length : null;
        const totalCorrect = totalCorrectOrIncorrect?.trueData?.length;
        const totalWrong = totalCorrectOrIncorrect?.falseData?.length;

        if (!didAlreadyQuizExist) {
            if (
                (video_title && totalQuiz && totalCorrect > 0) ||
                totalWrong > 0
            ) {
                // if all quiz fill up
                if (totalCorrect + totalWrong === totalQuiz) {
                    postData({
                        data: {
                            student_id,
                            student_name,
                            video_id: +videoId,
                            video_title,
                            totalQuiz,
                            totalCorrect,
                            totalWrong,
                            totalMark: totalQuiz * 5,
                            mark: 5 * totalCorrect,
                            quizInfo: totalCorrectOrIncorrect.stateValue,
                        },
                        url: 'quizMark',
                    });
                } else {
                    // otherwise
                    window.alert(
                        `Your quiz left on ${
                            totalQuiz - (totalCorrect + totalWrong)
                        }`
                    );
                }
            } else {
                window.alert('Please select your quiz.');
            }
        } else {
            window.alert('Quiz already exist');
        }
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/leader-board');
        }
    }, [isSuccess, navigate]);

    return (
        <>
            <Nav />
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold">
                            Quizzes for Debounce Function in JavaScript -
                            JavaScript Job Interview question
                        </h1>
                        <p className="text-sm text-slate-200">
                            Each question contains 5 Mark
                        </p>
                    </div>

                    <div className="space-y-8 ">{content}</div>

                    <form action="" onSubmit={handleSubmit}>
                        <button
                            disabled={exist}
                            style={ { cursor: exist ? 'not-allowed' : 'pointer' } }
                            type="submit"
                            className={`px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Quiz;

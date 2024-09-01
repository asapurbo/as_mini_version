// import { FaFileWaveform } from 'react-icons/fa6';
import { MdAssignmentAdd } from 'react-icons/md';

import Modal from './Modal';
import { useContext, useEffect, useState } from 'react';
import useMap from '../../../hook/useMap';
import { useGetDataQuery } from '../../../feature/get/getApi';
import { GiCheckMark } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { IsContext } from '../../../contexts/DataContexts';

// eslint-disable-next-line react/prop-types
const Item = ({ assingnment }) => {
    const isTrue = useContext(IsContext);

    const [modal, setModal] = useState(false);
    const studentId = useSelector((state) => state.userReducer.user.id);

    const { title, video_title, id: assignmentsID } = assingnment ?? {};
    const resDataAssM = useGetDataQuery('assignmentMark');

    let haveFound = useMap(resDataAssM, (content) => {
        if (Array.isArray(content?.data)) {
            const findStudent = content?.data.some(
                (i) =>
                    i.student_id === studentId &&
                    i.assignment_id === assignmentsID
            );
            return findStudent;
        }
    });

    useEffect(() => {
        if (isTrue?.state ? isTrue?.state[0] : null) {
            setModal(false);
        }
    }, [isTrue]);

    return (
        <div className="grid grid-cols-7 gap-4 mt-3">
            <h3 className="col-span-3">{title}</h3>
            <h3 className="col-span-3">{video_title}</h3>

            {haveFound ? (
                <GiCheckMark className="text-center w-full text-2xl text-green-500" />
            ) : (
                <span onClick={() => setModal(!modal)}>
                    <MdAssignmentAdd className="text-center w-full text-2xl cursor-pointer" />
                </span>
            )}

            {modal && (
                <Modal
                    assingnmentData={assingnment}
                    onClick={() => setModal(false)}
                />
            )}
        </div>
    );
};

export default Item;

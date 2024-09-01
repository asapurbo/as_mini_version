import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Public = ({ children }) => {
    const data = useSelector((state) => state.userReducer);

    return data?.accessToken && data?.user ? (
        <Navigate to="/course-player" />
    ) : (
        children
    );
};

export default Public;

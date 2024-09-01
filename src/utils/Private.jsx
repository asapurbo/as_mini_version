// dependecies
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const data = useSelector((state) => state.userReducer);
    const [xData, setXData] = useState()
    useEffect(() => {
        setXData(data)
    }, [data])

    return !data?.accessToken && !data?.user ? <Navigate to="/" /> : children;
};

export default Private;

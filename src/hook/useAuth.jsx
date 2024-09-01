import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userInfo } from '../feature/users/userSlice';

const useAuth = () => {
    const [con, setCon] = useState(false);
    const dispatch = useDispatch();
    let auth = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        if (auth?.accessToken) {
            dispatch(userInfo(auth));
            setCon(true);
        } else {
            setCon(true);
        }
    }, [dispatch, auth]);

    return con;
};

export default useAuth;

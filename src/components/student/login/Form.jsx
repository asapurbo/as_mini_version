import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePostDataMutation } from '../../../feature/post/postApi';
import Error from '../../../ui/Error';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [able, setAble] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [postData, { data, isError, isLoading, error: resError }] =
        usePostDataMutation();

    // use effect
    useEffect(() => {
        if (email && password) {
            setAble(false);
        } else {
            setAble(true);
        }
    }, [able, email, password]);
    // error handleing
    useEffect(() => {
        if (resError?.status === 400 && resError?.data) {
            setError(resError?.data);
        }
    }, [resError]);

    // data post
    useEffect(() => {
        if (data && !isError && !isLoading) navigate('/course-player');
    }, [data, isError, isLoading, navigate]);
    // handle submit
    const handleSubmit = (_) => {
        _.preventDefault();
        if (email && password) {
            postData({
                data: {
                    email,
                    password,
                },
                url: 'login',
            });
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="login-input rounded-t-md"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="login-input rounded-b-md"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <Error message={error} />}
            </div>

            <div className="flex items-center justify-end">
                <div className="text-sm">
                    <Link
                        to="/registration"
                        href="./StudentReistration.html"
                        className="font-medium text-violet-600 hover:text-violet-500"
                    >
                        Create New Account
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    disabled={able}
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default Form;

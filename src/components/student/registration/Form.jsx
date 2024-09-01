import { useEffect, useState } from 'react';
import { usePostDataMutation } from '../../../feature/post/postApi';
import { useNavigate } from 'react-router-dom';
import EmailValidation from '../../../utils/EmailValidation';
import Error from '../../../ui/Error'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [able, setAble] = useState(true);
    const navigate = useNavigate();
    const [error, setError] = useState()

    // use effect
    useEffect(() => {
        if (name && email && password && confirmPassword) {
            setAble(false);
        } else {
            setAble(true);
        }
    }, [able, name, email, password, confirmPassword]);

    // data post
    const [postData, { data, isError, isLoading, error: resError }] = usePostDataMutation();

    useEffect(() => {
        if (data && !isError && !isLoading) navigate('/course-player');
    }, [data, isError, isLoading, navigate]);

    useEffect(() => {
       setError(resError)
    }, [resError])
    // handle submit
    const handleSubmit = (_) => {
        _.preventDefault();
        const validEmail = EmailValidation(email)

        if (name && validEmail && password && confirmPassword) {
            if (password === confirmPassword) {
                postData({
                    data: {
                        email: validEmail,
                        password,
                        role: 'student',
                        name,
                    },
                    url: 'users',
                });
            }
        } else {
            setError('Email is not valid!')
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="login-input rounded-t-md"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                        className="login-input "
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
                        className="login-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password" className="sr-only">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="confirm-password"
                        required
                        className="login-input rounded-b-md"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {error && <Error message={error} />}
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 cursor-pointer"
                    disabled={able}
                >
                    Create Account
                </button>
            </div>
        </form>
    );
};

export default Form;

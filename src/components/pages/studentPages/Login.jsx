// depedecices
import Form from '../../student/login/Form';

import LoginHeader from '../../student/login/LoginHeader';

const Login = () => {
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                {/* login header start */}
                <LoginHeader />
                {/* login header end */}

                {/* form start */}
                <Form />
                {/* form end */}
            </div>
        </section>
    );
};

export default Login;

import Form from "../../admin/login/Form";
import logo from '../../../assets/x.png'

const Login = () => {
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <img
                        className="h-12 mx-auto"
                        src={logo}
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Sign in to Admin Account
                    </h2>
                </div>
                {/* login form */}
                <Form />
                {/* login form */}
            </div>
        </section>
    );
};

export default Login;

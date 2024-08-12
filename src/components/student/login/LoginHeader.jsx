// dependecies
import logo from '../../../assets/x.png'

const LoginHeader = () => {
    return (
        <div>
            <img className="h-12 mx-auto" src={logo} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                Sign in to Student Account
            </h2>
        </div>
    );
};

export default LoginHeader;

// dependencise
import logo from '../../../assets/x.png'

const RegistrationHeading = () => {
    return (
        <div>
            <img
                className="h-12 mx-auto"
                src={logo}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                Create Your New Account
            </h2>
        </div>
    );
};

export default RegistrationHeading;

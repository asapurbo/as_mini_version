// dependecise
import Form from '../../student/registration/Form'
import RegistrationHeading from '../../student/registration/RegistrationHeading'

const Registration = () => {
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                {/* registration heading start */}
                <RegistrationHeading />
                {/* registration heading end */}

                {/* registration from start */}
                <Form />
                {/* registration from end */}
            </div>
        </section>
    );
};

export default Registration;

import LeftAside from "../../student/coursePlayer/LeftAside";
import RightAside from "../../student/coursePlayer/RightAside";

const CoursePlayer = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {/* left aside start */}
                    <LeftAside />
                    {/* left aside end */}

                    {/* right aside start */}
                    <RightAside />
                    {/* right aside end */}
                </div>
            </div>
        </section>
    );
};

export default CoursePlayer;

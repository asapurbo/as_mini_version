import AssingnmentFeature from '../../admin/dashboard/AssingnmentFeature';
import AssingnmentMarkFeature from '../../admin/dashboard/AssingnmentMarkFeature';
import QuizFeature from '../../admin/dashboard/QuizFeature';
import VideoFeature from '../../admin/dashboard/VideoFeature';

const Dashboard = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
                        <VideoFeature />

                        <AssingnmentMarkFeature />

                        <QuizFeature />

                        <AssingnmentFeature />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;

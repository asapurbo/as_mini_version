import { useGetDataQuery } from '../../../feature/get/getApi';
import useMap from '../../../hook/useMap';
import Item from './Item';

const RightAside = () => {
    const resDate = useGetDataQuery('videos');

    let content = null;

    useMap(resDate, (data) => {
        if (Array.isArray(data.data)) {
            content = data?.data?.map((i) => {
                return <Item key={i.id} info={i} />;
            });
        }
    });

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
            {content}
        </div>
    );
};

export default RightAside;

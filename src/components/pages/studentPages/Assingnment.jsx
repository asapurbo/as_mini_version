
import { useParams } from 'react-router-dom';
import { useGetDataQuery } from '../../../feature/get/getApi';
import useMap from '../../../hook/useMap';
import Item from '../../student/assingnment/Item';

const Assingnment = () => {
    const {assingnmentId} = useParams()

    const resDataAss = useGetDataQuery(`assignments?video_id=${assingnmentId}`)


    const contents = useMap(resDataAss, (content) => {
        if(Array.isArray(content?.data)) {
            return content?.data.map(i => {
                return <Item key={i.id} assingnment={i}/>
            })
        } else {
            return content.loading
        }
    })


    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-full px-5 lg:px-20">
                <div className="flex items-center text-4xl justify-center">
                    <h1>Assingnment</h1>
                </div>
                <div className="grid grid-cols-7 gap-4 mt-[100px]">
                    <h3 className='col-span-3 font-bold text-2xl'>Title</h3>
                    <h3 className='col-span-3 font-bold text-2xl'>Video Title</h3>
                    <h3 className='text-center w-full col-span-1 font-bold text-2xl'>Action</h3>
                </div>
                {contents}
            </div>
        </section>
    );
};

export default Assingnment;

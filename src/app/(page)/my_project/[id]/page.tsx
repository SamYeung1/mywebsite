import {useRouter} from 'next/router'
// import {} from 'pu'
export default function ProjectDetailPage({params}: { params: { id: string } }) {
    return <div className={'flex flex-col justify-center items-center gap-4 p-5'}>
        <div className={'rounded-md shadow-md bg-white w-10/12 relative h-32'}>
            <div className={'rounded-md shadow-md bg-amber-500 absolute left-0 top-0'}>sss</div>
        </div>
        <div className={'rounded-md shadow-md bg-white w-10/12'}>sss</div>
        <div className={'rounded-md shadow-md bg-white w-10/12'}>sss</div>
    </div>
}

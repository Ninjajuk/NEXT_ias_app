import {style} from './style.css'


const StudentDashBoard=()=>{
    return(
        <>
        <div className='parent'>
            <div className="bg-gray-300 hidden md:block">Sidebar</div>
            <div className="bg-sky-300 ">
                <h1>Dashboard</h1>
                <div className='max-w-[700px] w-full bg-green-200 mx-auto h-[250px]'>Samsu</div>
            
            </div>

        </div>

        </>
    )
}
export default StudentDashBoard;
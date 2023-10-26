
const courses=[
    {title:'About us',href:'about-us',isActive:false,submenu:[{name:'About Us',href:'about-us',current: false,},{name:'Director desk',href:'director-desk',current: false,},{name:'Advisory Panel',href:'advisory-panel',current: false,},{name:'Faculty Panel',href:'faculty-panel',current: false,}]},
]

 export default function CoursesHover(){

    return(
        <>
        <div className="submenu hidden absolute top-full left-0 bg-[#ba9d5a] border border-gray-300 rounded-md p-2 w-[250px] h-[300px] ">
           <div className="flex gap-2">
           <ul className="bg-white rounded-md">
                <li>General studies</li>
                <li>General studies</li>
                <li>General studies</li>
                <li>General studies</li>
            </ul>
            <ul>{courses.map((item)=>
            {Array.isArray(item) &&
                <li>{item}</li>}
             )}
               
                <li>General studies</li>
                <li>General studies</li>
                <li>General studies</li>
            </ul>
           </div>
   

        </div>
        </>
    )

}
const AboutUs=()=>{
    return(
        <>
   
        <section className="bg-blue-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="text-4xl mb-4">About Us</h1>
                    <p className="text-red-600">Next generation institute for the preparation of UPSC Civil Services Examination.</p>
                </div>
                <div className="md:w-1/2">
                    <p>NEXT IAS, an initiative of MADE EASY GROUP, is a premier institute for UPSC Civil Services Examination preparation. We offer programmes to assist students in all the three stages of the preparation - Preliminary examination, Main examination and Personality Test. NEXT IAS was started in 2017 by Mr. B. Singh (Ex. IES), CMD MADE EASY Group. Within a short span of time, the NEXT IAS has become the most preferred destination for the aspirants due to its top faculty panel, comprehensively designed courses and a constant desire to impart quality education.</p>
                </div>
            </div>
        </div>
        </section>

        {/* image section  and mission*/}
        <section className="bg-blue-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
            <div className="flex flex-col md:flex-row h-[600px] gap-4 mb-4">
                <div className="md:w-3/5 h-full">
                    <img className="w-full h-full object-cover rounded-md" src='https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/191780725437031650_image.JPG'/>
                </div>
                <div className="md:w-2/5 h-full flex flex-col gap-4">
                    <div className="w-full h-1/2">
                    <img className="w-full h-full object-cover rounded-md" src='https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/291951458418777700_image.JPG'/>

                    </div>
                    <div className="w-full h-1/2">
                    <img className="w-full h-full object-cover rounded-md" src='https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/file_library/mix_content/633224764429654700_PDF_ORIGINAL.JPG'/>
                    </div>
                </div>
         
            </div>
            <div className="py-4">
                <p className="mb-4">Every year thousands of individuals dream of serving the nation and owning a prestigious job in the Government of India by appearing in the Civil Services Examination conducted by the Union Public Service Commission. However, only very few of these aspirants succeed in cracking the examination in the absence of adequate guidance and lack of proper planning and strategy.</p>
            <p className="mb-4">Mr. B. Singh (Ex. IES), CMD MADE EASY Group, whose only vision is to impart quality education because of his firm belief that “Imparting Education is the biggest Religion”, launched NEXT IAS, an initiative of the MADE EASY Group to ensure that our youth is capable of achieving what they have dreamt and are not misled anywhere.</p>
            <p className="mb-4">Since its inception, NEXT IAS has been able to build a deeper association with its student due to its constant and continuous efforts to guide and mentor every student of the NEXT IAS family through quality teaching and personalized support throughout the student’s journey as a Civil Servant aspirant.</p>
            <p className="mb-4">NEXT IAS believes that “it is the quality of teachers that decides the quality of students”. Guided by this thought, NEXT IAS has a team of experienced faculty members that comprises highly acclaimed retired professors, retired bureaucrats, and subject experts to ensure students benefit from the best in the industry. With years of experience, in-depth knowledge of the content, and a grasp over the UPSC syllabus and recent examination trends, combined with the ability to design the teaching methodology as per student’s needs, our faculty is the most sought after in the field.</p>
            <p className="mb-4">We believe success lands at your doorstep if the student follows the 6 D’s — Desire, Decision, Dedication, Determination, Discipline and Direction. Adopting the best methods and exam-relevant approach, NEXT IAS acts as a torchbearer to the students by providing the right guidance towards cracking the UPSC Civil Services Examination.</p>
            <p className="mb-4">Considered to be one of the toughest and very prestigious examinations, UPSC Civil Services Examination can be cleared through a combination of meticulous planning, better guidance, and discipline in studies. NEXT IAS, with a systematic pedagogy, continuously updated curriculum as per the changing need of the examination. NEXT IAS is focused on helping every aspirant to develop temperament and strengthen their ability to crack the examination.</p>
            <p className="mb-4">In addition to the classroom courses and Test Series, provision for an online learning platform – ‘Student’s Portal’, Live/Online classroom programs, Online Test Series, updated study books/material, Interview Guidance Program, Postal Course and much more, makes NEXT IAS – a preferred destination for many aspirants.</p>
            </div>

            <div className="py-4 bg-yellow-200 rounded-md">
                <div className="flex flex-col px-4">
                    <div className="flex items-center mb-4">
                        <h3 className="text-2xl pr-4 font-semibold text-red-600">Our Mission</h3>
                        <img width="40" height="40" alt="Mission" className="" src="https://cdnstatic.nextias.com/assets/images/icons/goal-arrow-hit.svg"/></div>
                    <p>To produce the best civil servants who through their dynamic and unbiased approach can contribute to the success and growth of the nation. Preparing the aspirants for each stage of the examination by developing a sound academic base through practical, logical &amp; analytical approach clubbed with quality teaching &amp; individual attention. We ensure that the aspirants develop a competitive attitude amongst themselves.</p>
                </div>
            </div>
        </div>
        </section>
              {/* image section  and mission*/}
        </>
    )
}
export default AboutUs;
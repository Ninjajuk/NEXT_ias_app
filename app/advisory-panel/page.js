import HomeLayout from "../page";

const AdvisoryPanel=()=>{
    return(
        <HomeLayout>
   
        <section className="bg-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                    <div>
                        <img className="w-full h-full object-cover rounded-md" src='https://cdnstatic.nextias.com/assets/images/advisory-bk.jpg'/>
                    </div>
                    <h1 className="text-center text-2xl text-red-600 pt-2">Mr. B. Singh</h1>
                    <h1 className="text-center  text-blue-600 py-2">Chief Advisor</h1>
                   
                </div>
                <div className="md:w-3/4 px-4">
                <div className="">
                    {/* <h1 className="text-4xl mb-2 text-blue-600 font-semibold">DIRECTOR’S DESK</h1> */}
                    <p className="mb-4 pl-4">Shri B.S. Bassi (IPS Retd.), Former Honourable member of UPSC & Former Police Commissioner of NCT, Delhi is the CHIEF ADVISOR to NEXT IAS for the Comprehensive Personality Test Training Program for CSE 2022. He will be guiding the mains qualified candidates of CSE 2022 for the Personality Test and will also be providing them one-to-one mentorship.</p>
                    <p className="mb-1 pl-4">Shri B. S. Bassi is a 1977 Batch IPS (Indian Police Service) Officer of AGUMT Cadre (Arunachal Pradesh, Goa, Mizoram and Union Territories). He served as Commissioner of Police, Special Commissioner of Police (Administration) of Dehi Police (2012-13). Special Commissioner of Police (Traffic) of Delhi Police (2011-12), Director General of Police of Goa Police (2009-11) and Inspector General of Police of Chandigarh Police (2000-2002). He took a number of steps to enhance the use of digital technology in policing. In particular, Himmat App for women safety and e-FIR Apps for lodging auto thefts and other thefts stand out in this regard. He is a recipient of President's Police medals for Meritorious Service (1996) and Distinguished Service (2002).</p>
                </div>
   
                </div>
    
            </div>
        </div>
        </section>


        </HomeLayout>
    )
}
export default AdvisoryPanel;
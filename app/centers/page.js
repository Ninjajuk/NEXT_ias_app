'use client'
import { useState } from "react";
import PersonalizedAcedemicCoach from "./PersonalizedAcedemic";
import QualityStudyMaterial from "./QStudyMaterial";
import QualityTeaching from "./QualityTeaching";
import ValueAddedfeatures from "./ValueAddedfeatures";


const Center=()=>{

    const tabs = [
        { id: 0, label: 'Quality Teaching', content: <QualityTeaching/> },
        { id: 1, label: 'Quality Study Material', content: <QualityStudyMaterial/> },
        { id: 2, label: 'Value Added Features', content: <ValueAddedfeatures/> },
        { id: 3, label: 'Personalized and Dedicated Academic Coach', content: <PersonalizedAcedemicCoach/> },
      ];
      const [activeTab, setActiveTab] = useState(tabs[0]);

      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    return (
      <>
        <section>
          <div className="max-w-[1200px] mx-auto ">
            <div className="relative">
              <img src="https://cdnstatic.nextias.com/assets/images/delhi-banner.jpg" />
              <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a href="" className="px-4">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect
                            id="Rectangle_4191"
                            width="44"
                            height="44"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g transform="translate(-428 1684)">
                        <g transform="translate(428 -1684)">
                          <rect
                            width="1.149"
                            height="2.565"
                            transform="translate(9.745 17.505)"
                            fill="#fff"
                          ></rect>
                          <rect
                            width="1.149"
                            height="2.565"
                            transform="translate(32.991 17.505)"
                            fill="#fff"
                          ></rect>
                          <rect
                            width="1.149"
                            height="2.565"
                            transform="translate(21.367 17.505)"
                            fill="#fff"
                          ></rect>
                          <rect
                            width="1.149"
                            height="2.565"
                            transform="translate(27.179 17.505)"
                            fill="#fff"
                          ></rect>
                          <rect
                            width="1.149"
                            height="2.565"
                            transform="translate(15.676 17.505)"
                            fill="#fff"
                          ></rect>
                        </g>
                        <g transform="translate(10.477 -2832.979)">
                          <g transform="translate(417.523 1148.979)">
                            <g transform="translate(0 0)">
                              <g clipPath="url(#clip-path)">
                                <g transform="translate(0 2.75)">
                                  <path
                                    d="M199.849,472.131V448.756h1.375v-1.375h-2.75v-4.125h-2.75v-5.5H191.6v-2.75h-13.75v2.75h-4.125v5.5h-2.75v4.125h-2.75v1.375H169.6v23.375h-6.875v1.375h44v-1.375Zm-8.25-15.125h6.875v2.75H191.6Zm0,4.125h6.875v6.875H191.6Zm-12.375-24.75h11v1.375h-11Zm-4.125,2.75h19.25v4.125H175.1Zm-2.75,5.5H197.1v2.75h-24.75Zm26.125,4.125v6.875H191.6v-5.5h-13.75v5.5h-6.875v-6.875Zm-20.625,19.25h-6.875v-6.875h6.875Zm-6.875-11h6.875v2.75h-6.875Zm0,12.375h6.875v2.75h-6.875Zm11,2.75V457.006a2.75,2.75,0,1,1,5.5,0v15.125Zm6.875,0V457.006a4.125,4.125,0,1,0-8.25,0v15.125h-1.375V451.506h11v20.625Zm2.75-2.75h6.875v2.75H191.6Z"
                                    transform="translate(-162.724 -435.006)"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M271.895,599.1a.688.688,0,1,0-.687-.687.687.687,0,0,0,.688.688"
                                    transform="translate(-260.207 -581.23)"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M326.135,489.247a.688.688,0,1,0,.688.688.688.688,0,0,0-.688-.687"
                                    transform="translate(-308.948 -483.747)"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M421.059,489.247a.688.688,0,1,0,.687.688.687.687,0,0,0-.687-.687"
                                    transform="translate(-394.246 -483.747)"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M475.3,599.1a.688.688,0,1,0-.687-.687.687.687,0,0,0,.687.688"
                                    transform="translate(-442.987 -581.23)"
                                    fill="#fff"
                                  ></path>
                                  <rect
                                    width="2.75"
                                    height="1.375"
                                    transform="translate(16.5 20.625)"
                                    fill="#fff"
                                  ></rect>
                                  <rect
                                    width="2.75"
                                    height="1.375"
                                    transform="translate(24.75 20.625)"
                                    fill="#fff"
                                  ></rect>
                                  <rect
                                    width="5.5"
                                    height="1.375"
                                    transform="translate(19.25 5.5)"
                                    fill="#fff"
                                  ></rect>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="text-white">Delhi</span>
                </a>
                <a href="" className="flex flex-col items-center px-2">
                  <span>
                    <svg
                      _ngcontent-serverApp-c19=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="45"
                      viewBox="0 0 44 45"
                    >
                      <path
                        _ngcontent-serverApp-c19=""
                        id="Path_15216"
                        data-name="Path 15216"
                        d="M288.364,422.625V401.252H288.3l.015-.016-1.821-1.8v-9.788h-1.1v-2.6h1.541v-1.128h-.776a2.694,2.694,0,0,0,.189-.578,1.933,1.933,0,0,0-.506-1.781c-.069-.071-.135-.143-.2-.216a3.751,3.751,0,0,0-1.64-1.167c-.031-.02-.191-.168-.2-1.149,0-.1,0-.173-.006-.235a.576.576,0,0,0-.54-.531l-.51-.025-.094.489a13.265,13.265,0,0,1-.385,1.623l-.065.026a4.583,4.583,0,0,0-1.79,1.272,1.988,1.988,0,0,0-.34,2.15c.015.042.031.083.047.123h-.753v1.128H280.9v2.6h-2.514V388.32H277.2v1.328h-1.95V388.32h-1.192v1.328h-1.85v-8.3H275.9v-2.059h-3.691v-.534h-1.141v10.9h-2.21V388.32h-1.192v1.328h-1.95V388.32h-1.192v1.328h-2.154v-2.6h1.32v-1.128h-.848a2.76,2.76,0,0,0,.189-.578,1.935,1.935,0,0,0-.506-1.781c-.069-.071-.135-.143-.2-.216a3.744,3.744,0,0,0-1.639-1.167c-.031-.02-.191-.168-.2-1.149,0-.1,0-.173-.006-.239a.576.576,0,0,0-.543-.527l-.507-.022-.093.486a13.452,13.452,0,0,1-.385,1.624l-.065.026a4.583,4.583,0,0,0-1.79,1.272,1.988,1.988,0,0,0-.34,2.15c.015.042.03.083.047.123h-.682v1.128h1.762v2.6h-1.611v9.742l-1.868,1.847.016.016h-.022v21.373H249.58v1.128h44v-1.128Zm-20.192-2.7v-3.114c.528-.89,2.018-3.014,3.25-3.247.978-.183,2.468,1.845,3.215,3.345l.111-.054v3.07Zm6.576-5.056c-.84-1.226-2.152-2.676-3.54-2.414a5.885,5.885,0,0,0-3.036,2.338v-.848c.528-.89,2.018-3.014,3.25-3.247.978-.183,2.468,1.846,3.215,3.346l.111-.054Zm-9.312-5.8h1.594v10.159h-1.594Zm12.047,10.159H275.89V409.075h1.594Zm-2.735-7.226c-.84-1.227-2.152-2.676-3.54-2.414a5.882,5.882,0,0,0-3.036,2.338V408.7h6.576Zm-19.214-4.432v-2.445h31.689v2.445ZM287.224,404h-1.4V402.38h1.4Zm-2.539,0H283.05V402.38h1.634Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0H277.5V402.38h1.634Zm-2.775,0h-1.635V402.38h1.635Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0H266.4V402.38h1.634Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0h-1.634V402.38h1.634Zm-2.775,0h-1.4V402.38h1.4Zm.475-5.169v-5.179H285.35v5.179Zm23.824-14.4a3.527,3.527,0,0,1,1.386-1,1.105,1.105,0,0,0,.594-.426,1.166,1.166,0,0,0,.41.244,2.682,2.682,0,0,1,1.173.862c.074.081.148.16.224.238a.783.783,0,0,1,.223.693,1.835,1.835,0,0,1-.415.886h-3.444C281.168,385.559,280.834,384.841,281.232,384.432Zm.812,2.619h2.208v2.6h-2.208Zm-24.129-2.619a3.527,3.527,0,0,1,1.386-1,1.105,1.105,0,0,0,.594-.426,1.158,1.158,0,0,0,.41.244,2.684,2.684,0,0,1,1.174.862c.074.081.147.16.223.238a.782.782,0,0,1,.224.693,1.835,1.835,0,0,1-.415.886h-3.444C257.851,385.559,257.517,384.841,257.915,384.432Zm1.1,2.619h2.208v2.6h-2.208Zm-1.14,3.725H285.35v1.753H257.408v-1.753Zm-.579,9.188h28.111l1.3,1.288H256Zm-1.766,22.662V408.7H264.3v11.224h-2.851v2.7Zm7.052,0v-1.569h16.756v1.569Zm17.9,0v-2.7h-1.859V408.7h8.6v13.921Z"
                        transform="translate(-249.58 -378.753)"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <span>Bhopal</span>
                </a>
                <a href="" className="flex flex-col px-2">
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="51.562"
                      viewBox="0 0 60 51.562"
                      style={{ maxHeight: "44px" }}
                    >
                      <path
                        id="jaipur"
                        d="M1966.065,1052.555v-6.563h0v-1.875h1.875v-1.875h-1.875v-9.375h1.875v-1.875h-1.875v-9.375h0a2.786,2.786,0,0,0-3.75-2.64v-.172h-1.875v7.5h-1.875v-5.625a.938.938,0,0,0-1.875,0v5.625h-1.875v-3.75h0V1018.8h7.5a1.875,1.875,0,0,0-1.875-1.875h-1.875v-1.875a.938.938,0,1,0-1.875,0v1.875h-1.875v-3.75a3.742,3.742,0,0,0-2.813-3.617v-2.008a.938.938,0,0,0-1.875,0v2.008a3.734,3.734,0,0,0-2.292,1.742h-2.4v-1.875a3.741,3.741,0,0,0-2.812-3.617V1003.8a.938.938,0,0,0-1.875,0v2.008a3.741,3.741,0,0,0-2.812,3.617v1.875h-2.4a3.734,3.734,0,0,0-2.292-1.742v-2.008a.938.938,0,0,0-1.875,0v2.008a3.741,3.741,0,0,0-2.812,3.617h0v3.75h-1.875v-1.875a.938.938,0,1,0-1.875,0v1.875h-1.875a1.875,1.875,0,0,0-1.875,1.875h7.5v7.5h-1.875v-5.625a.938.938,0,0,0-1.875,0v5.625h-1.875v-4.687h0V1018.8h-1.875v.172a2.785,2.785,0,0,0-3.75,2.64h0v9.375h-1.875v1.875h1.875v9.375h-1.875v1.875h1.875v5.625h0v.938h0v1.875h-5.625v1.875h60v-1.875Zm-3.75-19.688h0a.937.937,0,0,1,1.875,0v8.611a2.636,2.636,0,0,0-1.875,0Zm0,11.25h0a.937.937,0,0,1,1.875,0v4.689h-1.875Zm0-22.5h0a.938.938,0,0,1,1.875,0h0v8.61a2.637,2.637,0,0,0-1.875,0v-2.047h0V1026.3h0Zm-5.625,6.563h3.75V1048.8h-1.875v-5.625a.938.938,0,0,0-1.875,0v5.625h-1.875v-3.75h0v-5.624h0V1033.8h0v-5.624h1.875Zm-30,15a.938.938,0,0,0-1.875,0v5.625h-1.875v-4.687h0v-4.687h5.625v5.625h0v3.75h-1.875Zm-5.625-1.7a2.636,2.636,0,0,0-1.875,0v-8.61h0a.937.937,0,0,1,1.875,0Zm-1.875,4.515v-1.875h0a.937.937,0,0,1,1.875,0v4.689h-1.875v-2.812Zm15,2.813h-.937v-2.812a.938.938,0,0,0-1.875,0v2.813h-.937v-3.75a1.875,1.875,0,0,1,3.75,0h0Zm0-6.98a3.64,3.64,0,0,0-3.75,0v-2.4h0V1033.8a1.875,1.875,0,0,1,3.75,0h0Zm1.875,3.23h0v-5.624h0V1033.8h0v-11.249h0V1018.8h1.875v30h-1.875Zm7.5,3.75h-.938v-2.812a.938.938,0,0,0-1.875,0v2.813h-.937v-3.75a1.875,1.875,0,0,1,3.75,0h0Zm-3.75-9.375V1033.8a1.875,1.875,0,0,1,3.75,0v8.021a3.64,3.64,0,0,0-3.75,0v-2.4Zm3.75-8.855a3.64,3.64,0,0,0-3.75,0v-8.02a1.875,1.875,0,0,1,3.75,0v-2.4h0Zm-1.875-19.27a1.875,1.875,0,0,1,1.875,1.875h0v6.145a3.64,3.64,0,0,0-3.75,0v-2.4h0v-3.75h0a1.875,1.875,0,0,1,1.875-1.875m-3.75,5.625h-1.875v-3.75h1.875Zm-7.5-7.5a1.875,1.875,0,1,1,3.75,0v3.75h0v6.145a3.641,3.641,0,0,0-3.75,0v-.52h0v-9.375Zm-1.875,3.75v3.75h-1.875v-3.75h1.875Zm-7.5,3.75v-3.75h0a1.875,1.875,0,1,1,3.75,0h0v6.145a3.641,3.641,0,0,0-3.75,0v-.52h0v-1.875Zm0,5.625h0a1.875,1.875,0,0,1,3.75,0v8.021a3.64,3.64,0,0,0-3.75,0v-2.4h0V1026.3h0Zm-5.625,5.625h3.75v9.375h-1.875v-5.625a.938.938,0,0,0-1.875,0v5.625h-1.875v-4.687h0v-4.687Zm-5.625-6.562a.937.937,0,0,1,1.875,0v8.611a2.637,2.637,0,0,0-1.875,0v-8.61Zm0,29.063h45v1.875h-45Z"
                        transform="translate(-1911.69 -1002.867)"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span>Jaipur</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200">
          <div className="max-w-[1200px] mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-sky-200 px-6 py-6 rounded-md shadow-md">
                <h1 className="text-3xl pt-2">NEXT IAS (Corporate Tower) </h1>
                <p className="py-1">27-B, Pusa Road,</p>
                <p>Metro Pillar no. 118, Near Karol Bagh Metro Station,</p>
                <p>New Delhi - 110060</p>
                <p>Phone: 8081300200</p>
                <p>Email: info@nextias.com</p>
                <div className="bg-red-600 text-center my-2 rounded-md text-white font-semibold">
                  <button className="py-2 px-2">Locate on Maps</button>
                </div>
              </div>

              <div className="bg-sky-300 px-6 py-6  rounded-md shadow-md">
                <h1 className="text-3xl pt-2 pb-1">
                  NEXT IAS (Mukherjee Nagar)
                </h1>
                <p>27-B, Pusa Road,</p>
                <p>Metro Pillar no. 118, Near Karol Bagh Metro Station,</p>
                <p>New Delhi - 110060</p>
                <p>Phone: 8081300200</p>
                <p>Email: info@nextias.com</p>
                {/* <div className="bg-red-600 text-center my-2"><button className="py-2 px-2">Locate on Maps</button></div> */}
              </div>
            </div>
          </div>
        </section>

        {/* courses features */}
        <section className="bg-violet-300">
          <div className="max-w-[1200px] mx-auto py-4 ">
            <div className="w-full flex flex-col md:flex-row">
              <div className="md:w-1/2 ">
                <div className="w-full px-6 py-2">
                    <h1 className="text-2xl py-4">Course Features</h1>
                    {activeTab.content}
                </div>
              </div>
              <div className="md:w-1/2  py-4 px-4">
                <div className="w-full grid grid-cols-2 ">
                {tabs.map((tab,) => (
        <div
          key={tab.id}
          className={` flex flex-col items-center justify-center py-4  cursor-pointer ${
            activeTab.id === tab.id ? 'bg-gray-200 rounded-md shadow-md' : ''
          }`}
          onClick={() => handleTabClick(tab)}
        >
          <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png' alt="Icon" />
          <h1 className="text-center">{tab.label}</h1>
        </div>
      ))}
                    {/* <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div>
                    <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div>
                    <div className=" bg-gray-200 flex flex-col items-center justify-center py-4 rounded-md shadow-md">
                        <img src='https://cdnstatic.nextias.com/assets/images/icons/quality-teaching.png'/>
                        <h1>Quality Teaching </h1>
                       
                    </div> */}
                    
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );}
export default Center
import {footerdata} from '../components/navbar/navdata'
import Link from 'next/link'
const Footer = () => {
    return (
      <footer className="bg-[#eff1f4]  py-4 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
          <div className="flex flex-col md:flex-row  w-full py-2">
            <div className="md:w-2/5  flex flex-col px-2 py-4">
              <div className='mb-4'style={{ width: "150px", height: "30px" }}>
                <img src="https://cdnstatic.nextias.com/assets/images/logo/next-ias.png" />
              </div>
              <div className='mb-4'>
                <p>
                  Next generation institute for the preparation of UPSC Civil
                  Services Examination{" "}
                </p>
              </div>
              <div className="flex ">
                <ul
                  className="flex nav mt-md-2 mt-1 pt-2"
                 
                >
                  <li _ngcontent-serverapp-c9="" class="me-1">
                    <a
                      _ngcontent-serverapp-c9=""
                      href="https://play.google.com/store/apps/details?id=com.nextias.app&amp;hl=en_IN&amp;gl=US"
                      target="_blank"
                    >
                      <img
                        _ngcontent-serverapp-c9=""
                        width="110"
                        height=""
                        alt="play-store"
                        class="img-fluid mb-lg-0 mb-md-0 mb-3  ng-lazyloaded"
                        src="https://cdnstatic.nextias.com/assets/images/icons/googleplay-download.svg"
                      />
                    </a>
                  </li>
                  <li _ngcontent-serverapp-c9="" class="me-1">
                    <a
                      _ngcontent-serverapp-c9=""
                      href="https://apps.apple.com/us/app/next-ias/id1527559034"
                      target="_blank"
                    >
                      <img
                        _ngcontent-serverapp-c9=""
                        width="110"
                        height=""
                        alt="apple-store"
                        class="img-fluid mb-lg-0 mb-md-0 mb-3  ng-lazyloaded"
                        src="https://cdnstatic.nextias.com/assets/images/icons/appstore-download.svg"
                      />
                    </a>
                  </li>
                  <li _ngcontent-serverapp-c9="">
                    <a
                      _ngcontent-serverapp-c9=""
                      href="https://next-ias-appsquadz.s3.ap-south-1.amazonaws.com/release/windows/next-ias-setup.exe"
                      target="_blank"
                    >
                      <img
                        _ngcontent-serverapp-c9=""
                        width="110"
                        height=""
                        alt="windows-app"
                        class="img-fluid mb-lg-0 mb-md-0 mb-3  ng-lazyloaded"
                        src="https://cdnstatic.nextias.com/assets/images/icons/windows-download.svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-3/5  px-2 py-4">
              <div className="w-full flex flex-col md:flex-row pl-4 pr-1">
                <div className="md:w-1/5 flex flex-col flex-wrap pb-8">
                  <div className='flex flex-wrap'>
                  {footerdata.map((item) => (
                    <Link href={item.href} className="py-2 w-1/2 md:w-full">
                      {item.title}
                    </Link>
                  ))}
                  </div>
              
                </div>
                <div className="md:w-2/5 pb-8">
                  <div className="w-full md:px-4">
                    <h5 className="mb-4">NEXT IAS (Delhi)</h5>
                    <ul>
                      <li className="">
                        <span>
                          27-B, Pusa Road, Metro Pillar no.
                          <br _ngcontent-serverapp-c9="" /> 118, Near Karol Bagh
                          Metro,
                          <br _ngcontent-serverapp-c9="" /> New Delhi-110060
                        </span>
                      </li>
                      <li className="flex items-center pt-4">
                        <img
                          width="12"
                          height="12"
                          alt="call"
                          class="  ng-lazyloaded"
                          src="https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg"
                        />
                        <span className='px-2'>8081300200</span>
                      </li>
                      <li className="flex items-center">
                        <img
                          width="12"
                          height="12"
                          alt="mail"
                          class="  ng-lazyloaded"
                          src="https://cdnstatic.nextias.com/assets/images/icons/email.svg"
                        />
                        <span className='px-2'>info@nextias.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="w-full md:px-4">
                    <div>
                      <h5 className='mb-4'>NEXT IAS (Bhopal)</h5>
                      <ul>
                        <li className='mb-8'>
                          <span>
                            Plot No. 46 Zone - 2 M.P Nagar
                            <br _ngcontent-serverapp-c9="" /> Bhopal - 462011
                          </span>
                        </li>
                        <li className="flex items-center ">
                          <span>
                            <img
                              _ngcontent-serverapp-c9=""
                              width="12"
                              height="12"
                              alt="call"
                              class="  ng-lazyloaded"
                              src="https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg"
                            />
                          </span>
                          <span
                            _ngcontent-serverapp-c9=""
                            class="footer-text font-14 ms-1 mr_sp ps-1"
                          >
                            8827664612
                          </span>
                        </li>
                        <li className="flex items-center">
                          <img
                            _ngcontent-serverapp-c9=""
                            width="12"
                            height="12"
                            alt="mail"
                            class="  ng-lazyloaded"
                            src="https://cdnstatic.nextias.com/assets/images/icons/email.svg"
                          />
                          <span
                            _ngcontent-serverapp-c9=""
                            class="footer-text font-14 ms-1 mr_sp ps-1"
                          >
                            infobhopal@nextias.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center border-t-2 border-red-500">
            <h1 className=" text-[#ba9d5a] font-medium py-2">
              @ 2023 NEXT IAS. All right reserved.
            </h1>
            <div className="flex  items-center py-2  ml-auto pr-4 text-[#ba9d5a]">
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/facebook.svg" />
              </a>
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/youtube.svg" />
              </a>
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/instagram.svg" />
              </a>
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/twitter.svg" />
              </a>
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/linkedin.svg" />
              </a>
              <a href="#" className="px-2">
                <img src="https://cdnstatic.nextias.com/assets/images/icons/telegram.png" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
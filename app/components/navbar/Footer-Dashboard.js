

function FooterDashboard() {
    return (
      <div
        className="w-full  flex items-center justify-between p-4 bg-gray-500"
        style={{ height: "4rem", }}
      >
        <div>
          <button className=" text-gray-600" > Privacy</button>
          <button className=" text-gray-600 px-2" > Term of Service</button>
          <button className="hidden md:block">
            <h1 className="text-white text-xl font-semibold leading-5 tracking-tight">
              NinjaKing
            </h1>
          </button>
        </div>
      </div>
    );
  }
  
  export default FooterDashboard;
  
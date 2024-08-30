import React from "react";
import Topbar from "../components/Topbar";
import MiddleSection from "../components/MiddleSection";

const HomePage = () => {
  return (
    <>
      <div >
        {/* <div className="mb-4">
          <Topbar />
        </div> */}
        <div className="max-h-screen max-w-full">
          <MiddleSection/>
        </div>
      </div>
    </>
  );
};

export default HomePage;

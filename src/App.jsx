import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import ChatInputBox from "./Components/InputBox";

const App = () => {
  return (
    <>
      <div className="bg-white w-full h-screen  flex flex-col ">
        <Header />
        <div className="bg-white w-full h-screen flex  p-8">
          
            <Sidebar/>
          
          <div className=" bg-white w-full  flex flex-col justify-between items-center ">
            <div className="bg-white w-full h-full">
              {/* contant */}
            </div>
            <div className="bg-white">
               <ChatInputBox/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

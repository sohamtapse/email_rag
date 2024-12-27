import React from "react";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-300 w-full  flex flex-col p-8">
        <div className="bg-white flex-grow hight rounded-lg  overflow-hidden">
          {/* messages */}
        </div>
        <div className=" w-full mt-5 flex">
          <input type="text" className="w-full border-white h-10 rounded-md p-2 text-sm" placeholder="Type your message..."/>
          <button className=" ml-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm p-2 pl-4 pr-4">Send</button>
        </div>
      </div>
    </>
  );
};

export default App;

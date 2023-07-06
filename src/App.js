import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }
    
  function resetHandler(){
      setCount(0);
  }
  
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center bg-slate-600 ">
      <div className="text-blue-500 text-2xl font-medium"> Increment And Decrement</div>
      <div className="bg-white flex justify-center rounded-sm gap-12 py-3 text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-gray-400 text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl ">
            {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-gray-400 text-5xl">
          +
        </button>
      </div>

      <button onClick={resetHandler} className="bg-blue-400 text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>

    </div>
  );
}

export default App;

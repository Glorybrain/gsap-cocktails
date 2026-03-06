import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 class="text-3xl text-indigo-200 font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;

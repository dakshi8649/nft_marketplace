/* eslint-disable arrow-body-style */
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import App1 from "./App1";
import Navbar2 from "./components2/Navbar2";
import Footer2 from "./components2/Footer2";
import Body2 from "./components2/Body2";

const Homepg = () => {
  return (
    // <>
    //   <Switch>
    //     <Route path="/" component="{Homepg}" />
    //     <Route path="/login" component="./App1" />
    //   </Switch>
    //   <BrowserRouter>
    //     <div className="min-h-screen bg-transparent">
    //       <div className="gradient-bg-welcome">
    //         <Navbar2 />
    //       </div>
    //       <Body2 />
    //       <Footer2 />
    //     </div>
    //   </BrowserRouter>
    // </>
    // <BrowserRouter>
      <div className="min-h-screen bg-transparent">
        <div className="gradient-bg-welcome">
          <Navbar2 />
        </div>
        <Body2 />
        <Footer2 />
      </div>
    // </BrowserRouter>
  );
};

export default Homepg;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepg from "./Homepg";
import LoginPg from "./App1";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepg />} />
      <Route path="/login" element={<LoginPg />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout/PublicLayout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

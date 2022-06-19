import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export type RoutesCompProps = {
  children?: React.ReactNode;
};

const RoutesComp = ({ children }: RoutesCompProps) => {
  return (
    //
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<h1>Login</h1>}></Route>
        <Route path="/home" element={<h1>Home</h1>}></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesComp;

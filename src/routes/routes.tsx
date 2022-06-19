import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoginProvider from "../contexts/LoginContext/Provider";

export type RoutesCompProps = {
  children?: React.ReactNode;
};

const Login = lazy(() => import("../pages/Login"));

const RoutesComp = ({ children }: RoutesCompProps) => {
  return (
    //
    <LoginProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<h1>Home</h1>}></Route>
        </Routes>
      </Suspense>
    </LoginProvider>
  );
};

export default RoutesComp;

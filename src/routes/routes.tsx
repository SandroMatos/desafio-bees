import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import CardProvider from "../contexts/CardContext/Provider";
import LoginProvider from "../contexts/LoginContext/Provider";

export type RoutesCompProps = {
  children?: React.ReactNode;
};

const Login = lazy(() => import("../pages/Login"));
const HomePage = lazy(() => import("../pages/Home"));

const RoutesComp = ({ children }: RoutesCompProps) => {
  return (
    //
    <CardProvider>
      <LoginProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </Suspense>
      </LoginProvider>
    </CardProvider>
  );
};

export default RoutesComp;

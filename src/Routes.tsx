import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

const Router = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;

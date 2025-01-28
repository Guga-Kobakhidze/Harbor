import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, MainPage, PageNotFound } from "./pages";

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

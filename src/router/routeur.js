import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import Home from "../pages/home";
import NoMatch from "./noMatch";
import CompanyPage from "../pages/CompanyPage";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<CompanyPage />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;

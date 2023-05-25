import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/layout";
import Home from "../pages/home";
import NoMatch from "./noMatch";
import CompanyPage from "../pages/CompanyPage";
import ListHistory from "../pages/ListHistory";
import History from "../pages/History";
import CrewDetails from "../pages/crewDetails";
import RocketsQuequette from "../pages/Rockets";
import RocketsDetails from "../pages/RocketsDetails";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<CompanyPage />}></Route>
          <Route path="/history" element={<ListHistory />}></Route>
          <Route path="/history/:id" element={<History />}></Route>
          <Route path="/member/:id" element={<CrewDetails />}></Route>
          <Route path="/rockets" element={<Rockets />}></Route>
          <Route path="/rockets/:id" element={<RocketsDetails />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routeur;

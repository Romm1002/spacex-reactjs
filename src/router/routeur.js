import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import NoMatch from "./NoMatch";
import CrewDetails from "../pages/CrewDetails";
import Rockets from "../pages/Rockets";
import RocketsDetails from "../pages/RocketsDetails";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
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

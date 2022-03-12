import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentatorMatchs from "../pages/CommentatorMatchs";
import Commentators from "../pages/Commentators";
import CommentatorStatistics from "../pages/CommentatorStatistics";
import Matchs from "../pages/Matchs";
import PaginationTable from "../pages/PaginationTable";

export default function Dashboard() {
  return (
    <div>
      <Routes>
        <Route exact path="/spiker" element={<Commentators />} />
        <Route exact path="/macdetay" element={<CommentatorMatchs />} />
        <Route exact path="/mac" element={<Matchs />} />
        <Route exact path="/page" element={<PaginationTable />} />
        <Route exact path="/istatistik" element={<CommentatorStatistics/>} />
      </Routes>
    </div>
  );
}

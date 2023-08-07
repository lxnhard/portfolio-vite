import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { Home } from "../pages/home/Home.jsx";
import { GeschaeftsberichtJSD } from "../pages/projects/GeschaeftsberichtJSD.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";

export const Router = (props) => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home scrollId={props.scrollId} />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.GBJSD}
      element={
        <Layout>
          <GeschaeftsberichtJSD />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);

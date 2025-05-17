import { Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { DefaultLayout } from "../layouts/default-layout";
import { TicketsPage } from "../pages/tickets-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="tickets" element={<TicketsPage />} />
      </Route>
    </Routes>
  );
};

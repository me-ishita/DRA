import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { AcademyHome } from "./pages/academy/AcademyHome";
import { AcademyPrograms } from "./pages/academy/AcademyPrograms";
import { ProgramDetail } from "./pages/academy/ProgramDetail";
import { Certifications } from "./pages/academy/Certifications";
import { Resources } from "./pages/academy/Resources";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import InvestmentBankingProgram from "./pages/academy/InvestmentBankingProgram";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: AcademyHome },
      { path: "programs", Component: AcademyPrograms },
      { path: "programs/investment-banking", Component: InvestmentBankingProgram },
      { path: "programs/:id", Component: ProgramDetail },
      { path: "certifications", Component: Certifications },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
      // Legacy /academy/* URLs redirect to new root paths
      { path: "academy", element: <Navigate to="/" replace /> },
      { path: "academy/programs", element: <Navigate to="/programs" replace /> },
      { path: "academy/programs/investment-banking", element: <Navigate to="/programs/investment-banking" replace /> },
      { path: "academy/certifications", element: <Navigate to="/certifications" replace /> },
      { path: "academy/resources", element: <Navigate to="/resources" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);

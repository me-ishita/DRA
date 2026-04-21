import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { AcademyHome } from "./pages/academy/AcademyHome";
import { AcademyProgrammes } from "./pages/academy/AcademyPrograms";
import { ProgrammeDetail } from "./pages/academy/ProgramDetail";
import { Certifications } from "./pages/academy/Certifications";
import { Resources } from "./pages/academy/Resources";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import InvestmentBankingProgramme from "./pages/academy/InvestmentBankingProgram";
import DigitalRiskFundamentals from "./pages/academy/DigitalRiskFundamentals";
import CyberResiliencePractitioner from "./pages/academy/CyberResiliencePractitioner";
import AIRiskGovernance from "./pages/academy/AIRiskGovernance";
import ExecutiveLeadership from "./pages/academy/ExecutiveLeadership";
import CNISCC from "./pages/academy/CNISCC";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: AcademyHome },
      { 
        path: "programmes",
        children: [
          { index: true, Component: AcademyProgrammes },
          { path: "investment-banking", Component: InvestmentBankingProgramme },
          { path: "digital-risk-fundamentals", Component: DigitalRiskFundamentals },
          { path: "cyber-resilience-practitioner", Component: CyberResiliencePractitioner },
          { path: "ai-risk-governance", Component: AIRiskGovernance },
          { path: "executive-leadership", Component: ExecutiveLeadership },
          { path: "cniscc", Component: CNISCC },
          { path: ":id", Component: ProgrammeDetail },
        ]
      },
      { path: "certifications", Component: Certifications },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
      // Legacy /academy/* URLs redirect to new root paths
      { path: "academy", element: <Navigate to="/" replace /> },
      { path: "academy/programmes", element: <Navigate to="/programmes" replace /> },
      { path: "academy/programmes/investment-banking", element: <Navigate to="/programmes/investment-banking" replace /> },
      { path: "programs", element: <Navigate to="/programmes" replace /> },
      { path: "programs/*", element: <Navigate to="/programmes" replace /> },
      { path: "academy/certifications", element: <Navigate to="/certifications" replace /> },
      { path: "academy/resources", element: <Navigate to="/resources" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
]);

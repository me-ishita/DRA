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
        path: "programs",
        children: [
          { index: true, Component: AcademyPrograms },
          { path: "investment-banking", Component: InvestmentBankingProgram },
          { path: "digital-risk-fundamentals", Component: DigitalRiskFundamentals },
          { path: "cyber-resilience-practitioner", Component: CyberResiliencePractitioner },
          { path: "ai-risk-governance", Component: AIRiskGovernance },
          { path: "executive-leadership", Component: ExecutiveLeadership },
          { path: "cniscc", Component: CNISCC },
          { path: ":id", Component: ProgramDetail },
        ]
      },
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

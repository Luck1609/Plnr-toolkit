import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Guest = lazy(() => import("./layouts/Guest"));
const AuthLayout = lazy(() => import("./layouts/Auth"));
const Login = lazy(() => import("@/pages/Auth/Login"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const Office = lazy(() => import("@/pages/Auth/Office"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Permit = lazy(() => import("@/pages/Applications"));
const Locality = lazy(() => import("@/pages/Locality"));
const Sectors = lazy(() => import("@/pages/Locality/Sector"));
const Quarters = lazy(() => import("@/pages/Quarter"));
const Staff = lazy(() => import("@/pages/Staff"));
const Committee = lazy(() => import("@/pages/Committee"));
const Sms = lazy(() => import("@/pages/Sms"));
const Settings = lazy(() => import("@/pages/Settings"));
const Letters = lazy(() => import("@/pages/Letter"));
const MinutesForm = lazy(() => import("@/inc/Meeting/MinutesForm"));
const PreflightCheck = lazy(() => import("./pages/PreflightCheck"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Guest />}>
          <Route index element={<PreflightCheck />} />
          <Route path="login" element={<Login />} />
          <Route path="officer" element={<Register />} />
          <Route path="office" element={<Office />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="applications/*">
            <Route index element={<Permit />} />
            <Route path="minutes/:panel"  element={<MinutesForm />} />
          </Route>
          <Route path="localities">
            <Route index element={<Locality />} />
            <Route path="sectors/:id"  element={<Sectors />} />
          </Route>
          <Route path="sectors" element={<Sectors />} />
          <Route path="quarters" element={<Quarters />} />
          <Route path="letters" element={<Letters />} />
          <Route path="staff" element={<Staff />} />
          <Route path="committee-members" element={<Committee />} />
          <Route path="sms" element={<Sms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

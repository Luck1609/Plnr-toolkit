import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "./layouts/Guest";
import AuthLayout from "./layouts/Auth";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Office from "@/pages/Auth/Office";
import Dashboard from "@/pages/Dashboard";
import Permit from "@/pages/Applications";
import Locality from "@/pages/Locality";
import Sectors from "@/pages/Locality/Sector";
import Quarters from "@/pages/Quarter";
import Staff from "@/pages/Staff";
import Committee from "@/pages/Committee";
import Sms from "@/pages/Sms";
import Settings from "@/pages/Settings";
import Letters from "@/pages/Letter";
import PreflightCheck from "./pages/PreflightCheck";

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
          <Route path="applications" element={<Permit />} />
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

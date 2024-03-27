import me from "@/assets/img/me.png";
import office from "@/assets/img/office-block.png";
import Loader from "@/components/Loader";
import { useAuth } from "@/hooks/useAuth";
import { Outlet, useLocation } from "react-router-dom";

export default function Guest() {
  const { pathname } = useLocation(),
    { isLoading, error } = useAuth({ middleware: "guest" });

  return isLoading ? (
    <Loader className="w-full !h-screen" />
  ) : !error ? (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="">Redirecting...</p>
    </div>
  ) : (
    <div className="w-full flex flex-col items-center justify-center h-screen pb-8 bg-slate-50 dark:bg-dark">
      {pathname === "/office" ? (
        <div>
          <img src={office} alt="" className="h-32" />
        </div>
      ) : (
        <div>
          <img src={me} alt="" className="h-32" />
        </div>
      )}

      <Outlet />
    </div>
  );
}

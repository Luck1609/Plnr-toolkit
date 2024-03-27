import { useEffect } from "react";
import useSWR from "swr";
// import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// import Helper from "@/helper";
// import { useNavigate } from "react-router-dom";


// const { api, http } = Helper, fetcher = async (url) => http.get(`${api}${url}`)

export const useAuth = ({ middleware }) => {
  const { data: stats } = useSWR("/preflight");
  const { data, isLoading, error } = useSWR("/staff-data");
  // const { data, isLoading, error } = useSWR("/staff-data", fetcher, {refreshInterval: 50000});

  // console.log('auth error', error, "staff data", data)
  // console.log("staff data", stats)



  useEffect(() => {
      if (middleware === "guest" && !error) {
        console.log("Error form guest", error)
        // window.location.href = "/dashboard"
      }
      
      else if (error && middleware === "auth") {
        console.log("Error form auth", error)
        window.location.href = "/"
        // navigate("/")
        toast.warning(error.message);
      }
  }, [error, middleware, isLoading]);

  return {
    data,
    isLoading,
    error,
  };
};



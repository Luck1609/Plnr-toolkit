import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import Helper from "@/helper";
import { useNavigate } from "react-router-dom";


const { http, api } = Helper;

export const useAuth = ({ middleware }) => {
  const [user, setUser] = useState({
    error: null,
    isLoading: true,
    data: null
  }), navigate = useNavigate();
  
  useEffect(() => {
    if (user.isLoading) getUser();
  }, [user.isLoading, getUser]);
  
  var getUser = useCallback(async () => {
    try {
      const {data} = await http.get(`${api}/staff-data`);
      setUser({...user, data: data, isLoading: false})
      if (middleware === "guest") navigate("/dashboard")
    } catch({message}) {
      setUser({ ...user, error: message, isLoading: false });
      navigate("/");
        toast.warning(user.error.message);
    }
  }, [middleware, user, navigate]);



  return {
    user: user.data,
    isLoading: user.isLoading,
    error: user.error
  };
};



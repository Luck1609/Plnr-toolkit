import Loader from "@/components/Loader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

export default function PreflightCheck() {
  const { data, isLoading } = useSWR("/preflight"), navigate = useNavigate(), goto = (url) => navigate(url);

  // const {office, staff} = data?.data ?? {};

  useEffect(() => {
    if (isLoading) <Loader />
    if (data?.data?.office?.length < 1) goto("/office")
    else if (data?.data?.staff < 1) goto("/officer")
    else goto("/login")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])

  return <></>
}

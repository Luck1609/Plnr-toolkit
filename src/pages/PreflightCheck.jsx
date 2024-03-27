import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

export default function PreflightCheck() {
  const { data, isLoading } = useSWR("/preflight"), navigate = useNavigate(), goto = (url) => navigate(url);

  const {office, staff} = data?.data ?? {};

  if (isLoading) return <Loader />
  if (office?.length < 1) return goto("/office")
  else if (staff < 1) return goto("/officer")
  else return goto("/login")
}

import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
import { columns } from "./partials/columns";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/lib/toolkit/reducers/modal";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sectors() {
  const { id } = useParams(),
   { data, isLoading } = useSWR(`/locality/${id}`),
    dispatch = useDispatch(), navigate = useNavigate();

  const addSector = () =>
    dispatch(
      toggleModal({
        title: "Add Sector",
        component: "sector",
        url: "/sector",
        mutation: `/locality/${id}`,
        show: true,
        values: {
          name: "",
          initials: "",
          blocks: [],
          locality_id: id
        },
      })
    );

  const goBack = () => navigate(-1);

  console.log("Availab le sectors", data)

  return (
    <BaseTable
      isLoading={isLoading}
      data={data?.data ?? []}
      columns={columns}
      thead={{
        title: (
          <Button className="flex items-center space-x-3 hover:bg-input" onClick={goBack}>
            <ArrowLeft size={20} />
            <span className="text-xl">Sector Management</span>
          </Button>
        ),
        btn: {
          text: "Add Sector",
          action: addSector,
        },
      }}
    />
  );
}
